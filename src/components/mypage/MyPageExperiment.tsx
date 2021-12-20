import useStore from 'store/Index';
import { Content } from 'lib/constant/Components';
import { Grid } from '@mui/material';
import ExperimentBox from 'components/experiment/ExperimentBox';

const MyPageExperiment = () => {
	const { ExperimentStore } = useStore();

	return (
		<>
			{ExperimentStore.myExperimentList.length > 0 ? (
				<Grid container rowSpacing={2} columnSpacing={3} alignItems="center">
					{ExperimentStore.myExperimentList.map((item) => {
						return (
							<Grid item key={item.title} xs={12} md={6}>
								<ExperimentBox item={item} key={item.title} mypage />
							</Grid>
						);
					})}
				</Grid>
			) : (
				<Content>아직 참여한 실험이 없군요 ! 지금 참여해보세요</Content>
			)}
		</>
	);
};

export default MyPageExperiment;
