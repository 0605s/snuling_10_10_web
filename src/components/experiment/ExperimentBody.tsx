import { CircularProgress, Divider } from '@mui/material';
import { RowContainer } from 'lib/constant/Components';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
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
			<RowContainer>
				<ExperimentFilter />
				<Divider orientation="horizontal" variant="middle" flexItem />
			</RowContainer>
			<RowContainer>
				{LoadingStore.loading ? <CircularProgress /> : <ExperimentList />}
			</RowContainer>
		</>
	);
});

export default ExperimentBody;
