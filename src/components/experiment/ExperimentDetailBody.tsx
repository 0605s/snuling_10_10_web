import { observer } from 'mobx-react';
import CreateIcon from '@mui/icons-material/Create';
import { SubTitle, Content } from 'lib/constant/Components';
import ExperimentDetailWarning from 'components/experiment/ExperimentDetailWarning';
import { useHistory, useParams } from 'react-router-dom';
import useStore from 'store/Index';
import { Button } from '@mui/material';

const ExperimentDetailBody = observer(() => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const { ExperimentStore, UserStore, ToastStore, LoadingStore } = useStore();

	const onClickAssign = () => {
		if (UserStore.user === null)
			ToastStore.setMessage('info', '실험에 참여하시려면 먼저 로그인을 해주세요');
		else if (ExperimentStore.experimentDetail?.exp_type === 'ON') {
			ExperimentStore.putExperimentDetail(parseInt(id, 10));
			ToastStore.setMessage('success', '실험에 참여되었습니다');
			window.open(ExperimentStore.experimentDetail.link, '_blank');
		}
	};

	if (!ExperimentStore.experimentDetail) return null;
	return (
		<>
			<SubTitle>{ExperimentStore.experimentDetail.title}</SubTitle>
			<Content
				dangerouslySetInnerHTML={{
					__html: `${ExperimentStore.experimentDetail.content}`,
				}}
			/>
			<Button
				disabled={ExperimentStore.experimentDetail.is_full}
				onClick={onClickAssign}
				endIcon={<CreateIcon />}
				variant="contained"
			>
				{ExperimentStore.experimentDetail.is_full ? '모집 마감' : '실험 참여하기'}
			</Button>
			<ExperimentDetailWarning experiment={ExperimentStore.experimentDetail} />
		</>
	);
});

export default ExperimentDetailBody;
