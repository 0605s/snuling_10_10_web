import { Grid } from '@mui/material';
import { observer } from 'mobx-react';
import useStore from 'store/Index';
import ExperimentBox from './ExperimentBox';

const ExperimentList = observer(() => {
	const { ExperimentStore } = useStore();

	return (
		<Grid container rowSpacing={2} columnSpacing={3} alignItems="center">
			{ExperimentStore.experimentList.map((item) => {
				return (
					<Grid item key={item.title} xs={6} md={4}>
						<ExperimentBox item={item} key={item.title} />
					</Grid>
				);
			})}
		</Grid>
	);
});

export default ExperimentList;
