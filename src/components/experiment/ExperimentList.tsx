import { Grid } from '@mui/material';
import { observer } from 'mobx-react';
import useStore from 'store/Index';
import ExperimentBox from './ExperimentBox';

const ExperimentList = observer(() => {
	const { ExperimentStore } = useStore();

	return (
		<Grid container rowSpacing={1} columnSpacing={1} alignItems="center">
			{ExperimentStore.experimentList.map((item) => {
				return (
					<Grid item key={item.title} xs={12} md={6} lg={4}>
						<ExperimentBox item={item} key={item.title} />
					</Grid>
				);
			})}
		</Grid>
	);
});

export default ExperimentList;
