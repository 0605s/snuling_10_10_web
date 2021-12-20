import { useState } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { Title } from 'lib/constant/Components';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import useStore from 'store/Index';
import styled from 'styled-components';
import ExperimentDetailInfo from './ExperimentDetailInfo';
import ExperimentOnlineModal from './ExperimentOnlineModal';

const ContentContainer = styled.div`
	width: 90%;
`;

const ButtonList = styled.div`
	display: flex;
	flex-direction: row;
`;

const ExperimentOnlineDetailBody = observer(() => {
	const { id } = useParams<{ id: string }>();
	const [code, setCode] = useState<string>('');
	const { ExperimentStore, UserStore, ToastStore } = useStore();
	const experiment = ExperimentStore.experimentDetail;
	const [isOnlineModalVisible, setIsOnlineModalVisible] = useState<boolean>(false);

	const onClickAssign = async () => {
		if (UserStore.user === null)
			ToastStore.setMessage('info', '실험에 참여하시려면 먼저 로그인을 해주세요');
		else {
			const res = await ExperimentStore.patchExperimentDetail(parseInt(id, 10), 'join');
			if (experiment && res.success) {
				ToastStore.setMessage('success', '실험에 참여되었습니다.');
				experiment.is_joined = true;
				setCode(res.code);
				setIsOnlineModalVisible(true);
			} else
				ToastStore.setMessage(
					'error',
					'서버에 오류가 있습니다. 잠시 뒤에 다시 시도해 주세요.',
				);
		}
	};

	const onClickComplete = async () => {
		const res = await ExperimentStore.postExperimentComplete(parseInt(id, 10));
		if (res) {
			ToastStore.setMessage('success', '실험 참여가 확인되었습니다.');
		} else
			ToastStore.setMessage('error', '서버에 오류가 있습니다. 잠시 뒤에 다시 시도해 주세요.');
	};

	if (!experiment) return null;
	return (
		<>
			<Title>{experiment.title}</Title>
			<ExperimentDetailInfo experiment={experiment} />
			<ContentContainer
				dangerouslySetInnerHTML={{
					__html: `${experiment.content}`,
				}}
			/>
			<ExperimentOnlineModal
				experiment={experiment}
				code={code}
				isModalVisible={isOnlineModalVisible}
				setIsModalVisible={setIsOnlineModalVisible}
			/>
			<ButtonList>
				{experiment.is_joined ? (
					<Button
						onClick={onClickComplete}
						endIcon={<CheckIcon />}
						variant="contained"
						sx={{ mt: 5 }}
					>
						실험을 완료했다면 여기를 눌러주세요
					</Button>
				) : (
					<Button
						disabled={
							experiment.is_full || experiment.is_joined || experiment.status !== 'P'
						}
						onClick={onClickAssign}
						endIcon={<CreateIcon />}
						variant="contained"
					>
						{experiment.is_joined
							? '참여 완료'
							: experiment.is_full
							? '모집 마감'
							: experiment.status !== 'P'
							? '참여 불가'
							: '실험 참여하기'}
					</Button>
				)}
			</ButtonList>
		</>
	);
});

export default ExperimentOnlineDetailBody;
