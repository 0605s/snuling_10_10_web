import { CircularProgress } from '@mui/material';
import { Content } from 'lib/constant/Components';
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
			{LoadingStore.loading ? (
				<CircularProgress />
			) : ExperimentStore.experimentList.length ? (
				<ExperimentList />
			) : (
				<Content>조건에 맞는 실험이 없습니다.</Content>
			)}
		</>
	);
});

export default ExperimentBody;
