import { useState } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { SubTitle, Content } from 'lib/constant/Components';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import useStore from 'store/Index';
import ModalTemplate from 'components/template/ModalTemplate';
import ExperimentOfflineModal from './ExperimentOfflineModal';
import ExperimentDetailInfo from './ExperimentDetailInfo';
import ExperimentOnlineModal from './ExperimentOnlineModal';

const ExperimentDetailBody = observer(() => {
	const { id } = useParams<{ id: string }>();
	const [code, setCode] = useState<string>('');
	const { ExperimentStore, UserStore, ToastStore } = useStore();
	const experiment = ExperimentStore.experimentDetail;
	const [isCalenderVisible, setIsCalenderVisible] = useState<boolean>(false);

	const onClickAssign = async () => {
		if (UserStore.user === null)
			ToastStore.setMessage('info', '실험에 참여하시려면 먼저 로그인을 해주세요');
		else if (experiment?.exp_type === 'ON') {
			const res = await ExperimentStore.patchExperimentDetail(parseInt(id, 10), 'join');
			if (res.success) {
				ToastStore.setMessage('success', '실험에 참여되었습니다.');
				experiment.is_joined = true;
				setCode(res.code);
				setIsCalenderVisible(true);
			} else
				ToastStore.setMessage(
					'error',
					'서버에 오류가 있습니다. 잠시 뒤에 다시 시도해 주세요.',
				);
		} else if (experiment?.exp_type === 'OFF') {
			setIsCalenderVisible(true);
		}
	};

	if (!experiment) return null;
	return (
		<>
			<SubTitle>{experiment.title}</SubTitle>
			<ExperimentDetailInfo experiment={experiment} />
			<Content
				dangerouslySetInnerHTML={{
					__html: `${experiment.content}`,
				}}
			/>
			<ModalTemplate
				isOpen={isCalenderVisible}
				onClickClose={() => setIsCalenderVisible(false)}
				onClickOK={() => setIsCalenderVisible(false)}
			>
				{experiment.exp_type === 'ON' ? (
					<ExperimentOnlineModal experiment={experiment} code={code} />
				) : (
					<ExperimentOfflineModal experiment={experiment} />
				)}
			</ModalTemplate>
			<Button
				disabled={experiment.is_full || experiment.is_joined}
				onClick={onClickAssign}
				endIcon={<CreateIcon />}
				variant="contained"
			>
				{experiment.is_joined
					? '참여 완료'
					: experiment.is_full
					? '모집 마감'
					: '실험 참여하기'}
			</Button>
		</>
	);
});

export default ExperimentDetailBody;
