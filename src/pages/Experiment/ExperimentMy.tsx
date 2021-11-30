import PageTemplate from 'components/template/PageTemplate';
import { useHistory } from 'react-router';
import { ExperimentMenus } from 'lib/menus';
import useStore from 'store/Index';
import { useEffect } from 'react';
import ExperimentMyBody from 'components/experiment/ExperimentMyBody';
import { CircularProgress } from '@mui/material';

const ExperimentMy = () => {
	const { UserStore, ToastStore, ExperimentStore, LoadingStore } = useStore();
	const history = useHistory();

	const getInit = async () => {
		LoadingStore.setLoading(true);
		let res = await ExperimentStore.getMyExperimentList();
		if (res && ExperimentStore.myExperimentList) LoadingStore.setLoading(false);
	};

	useEffect(() => {
		if (UserStore.user === null) {
			ToastStore.setMessage('warning', '로그인 후 이용 가능합니다.');
			history.push('/experiment');
		} else {
			getInit();
		}
	}, []);

	return (
		<PageTemplate title="my experiments" menu={ExperimentMenus}>
			{LoadingStore.loading ? <CircularProgress /> : <ExperimentMyBody />}
		</PageTemplate>
	);
};

export default ExperimentMy;
