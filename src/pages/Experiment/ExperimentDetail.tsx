import styled from 'styled-components';
import Button from '@mui/material/Button';
import PageTemplate from 'components/template/PageTemplate';
import { ExperimentMenus } from 'lib/menus';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import useStore from 'store/Index';
import CreateIcon from '@mui/icons-material/Create';
import { SubTitle, Content } from 'lib/constant/Components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ExperimentDetailWarning from 'components/experiment/ExperimentDetailWarning';

const BackButton = styled(Button)`
	align-self: flex-start;
`;
const ExperimentDetail = observer(() => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const { ExperimentStore, UserStore, ToastStore } = useStore();

	const onClickAssign = () => {
		if (UserStore.user === null)
			ToastStore.setMessage('info', '실험에 참여하시려면 먼저 로그인을 해주세요');
		else if (ExperimentStore.experimentDetail?.exp_type === 'ON') {
			ExperimentStore.putExperimentDetail(parseInt(id, 10));
			ToastStore.setMessage('success', '실험에 참여되었습니다');
			window.open(ExperimentStore.experimentDetail.link, '_blank');
		}
	};

	useEffect(() => {
		ExperimentStore.getExperimentDetail(parseInt(id, 10));
	}, []);

	if (!ExperimentStore.experimentDetail) return null;
	return (
		<PageTemplate title="Experiments" menu={ExperimentMenus}>
			<BackButton onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>
				목록으로 가기
			</BackButton>
			<SubTitle>{ExperimentStore.experimentDetail.title}</SubTitle>
			<Content
				dangerouslySetInnerHTML={{ __html: `${ExperimentStore.experimentDetail.content}` }}
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
		</PageTemplate>
	);
});

export default ExperimentDetail;
