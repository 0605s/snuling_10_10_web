import BannerTemplate from 'components/template/BannerTemplate';
import ExperimentBody from 'components/experiment/ExperimentBody';
import PageTemplate from 'components/template/PageTemplate';

const ExperimentMenus = [
	{
		title: 'Lists',
		domain: '/',
	},
	{
		title: 'My Experiments',
		domain: '/my',
	},
];

const ExperimentMain = () => {
	return (
		<PageTemplate title="Experiments" menu={ExperimentMenus}>
			<ExperimentBody />
		</PageTemplate>
	);
};

export default ExperimentMain;
