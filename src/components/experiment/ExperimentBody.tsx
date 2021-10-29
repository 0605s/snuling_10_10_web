import { CircularProgress, Divider } from '@mui/material';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import useStore from 'store/Index';
import ExperimentFilter from './ExperimentFilter';
import ExperimentList from './ExperimentList';

const ExperimentBody = observer(() => {
	const { ExperimentStore, LoadingStore } = useStore();

	const getInit = async () => {
		LoadingStore.setLoading(true);
		const res = await ExperimentStore.getExperimentList();
		if (res) LoadingStore.setLoading(false);
	};

	useEffect(() => {
		getInit();
	}, []);

	return (
		<>
			<ExperimentFilter />
			{/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
			{LoadingStore.loading ? <CircularProgress /> : <ExperimentList />}
		</>
	);
});

export default ExperimentBody;
