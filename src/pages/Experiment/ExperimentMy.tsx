import PageTemplate from 'components/template/PageTemplate';
import { useHistory } from 'react-router';
import { ExperimentMenus } from 'lib/menus';
import useStore from 'store/Index';
import { useEffect } from 'react';
import { SubTitle } from 'lib/constant/Components';
import { Grid } from '@mui/material';
import ExperimentBox from 'components/experiment/ExperimentBox';

const ExperimentMy = () => {
	const { UserStore, ToastStore, ExperimentStore } = useStore();
	const history = useHistory();

	const getInit = async () => {
		let res = await ExperimentStore.getMyExperimentList();
	};

	useEffect(() => {
		if (UserStore.user === null) {
			ToastStore.setMessage('warning', '로그인 후 이용 가능합니다.');
			history.push('/experiment');
		}
		getInit();
	}, []);

	return (
		<PageTemplate title="my experiments" menu={ExperimentMenus}>
			{ExperimentStore.myExperimentList.length > 0 ? (
				<Grid container rowSpacing={2} columnSpacing={3} alignItems="center">
					{ExperimentStore.myExperimentList.map((item) => {
						return (
							<Grid item key={item.title} xs={12} md={6}>
								<ExperimentBox item={item} key={item.title} />
							</Grid>
						);
					})}
				</Grid>
			) : (
				<div>아직 참여한 실험이 없군요 ! 지금 참여해보세요</div>
			)}
		</PageTemplate>
	);
};

export default ExperimentMy;
