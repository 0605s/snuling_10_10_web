import styled from 'styled-components';
import Button from '@mui/material/Button';
import PageTemplate from 'components/template/PageTemplate';
import { ExperimentMenus } from 'lib/menus';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import useStore from 'store/Index';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CircularProgress } from '@mui/material';
import ExperimentDetailBody from 'components/experiment/ExperimentDetailBody';

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
		if (res) LoadingStore.setLoading(false);
	};

	useEffect(() => {
		getInit();
	}, []);

	return (
		<PageTemplate menu={ExperimentMenus}>
			<BackButton onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>
				목록으로 가기
			</BackButton>
			{LoadingStore.loading ? <CircularProgress /> : <ExperimentDetailBody />}
		</PageTemplate>
	);
});

export default ExperimentDetail;
