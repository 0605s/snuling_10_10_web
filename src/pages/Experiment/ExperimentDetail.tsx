import styled from 'styled-components';
import Button from '@mui/material/Button';
import PageTemplate from 'components/template/PageTemplate';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import useStore from 'store/Index';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CircularProgress } from '@mui/material';
import ExperimentDetailOnlineBody from 'components/experiment/ExperimentDetailOnlineBody';
import ExperimentDetailOfflineBody from 'components/experiment/ExperimentDetailOfflineBody';

const BackButton = styled(Button)`
	align-self: flex-start;
`;

const ExperimentDetail = observer(() => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const { ExperimentStore, LoadingStore } = useStore();

	const getInit = async () => {
		LoadingStore.setLoading(true);
		let res = await ExperimentStore.getExperimentDetail(parseInt(id, 10));
		if (res && ExperimentStore.experimentDetail) LoadingStore.setLoading(false);
	};

	useEffect(() => {
		getInit();
	}, []);

	return (
		<PageTemplate>
			<BackButton onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>
				목록으로 가기
			</BackButton>
			{LoadingStore.loading ? (
				<CircularProgress />
			) : ExperimentStore.experimentDetail?.exp_type === 'ON' ? (
				<ExperimentDetailOnlineBody />
			) : (
				<ExperimentDetailOfflineBody />
			)}
		</PageTemplate>
	);
});

export default ExperimentDetail;
