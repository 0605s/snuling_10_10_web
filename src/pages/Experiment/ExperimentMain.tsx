import BannerTemplate from 'components/template/BannerTemplate';
import ExperimentBody from 'components/experiment/ExperimentBody';
import PageTemplate from 'components/template/PageTemplate';
import { ExperimentMenus } from 'lib/menus';

const ExperimentMain = () => {
	return (
		<PageTemplate title="Experiments" menu={ExperimentMenus}>
			<ExperimentBody />
		</PageTemplate>
	);
};

export default ExperimentMain;
