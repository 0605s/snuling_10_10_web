import BannerTemplate from 'components/template/BannerTemplate';
import ExperimentBody from 'components/experiment/ExperimentBody';
import PageTemplate from 'components/template/PageTemplate';
import { Route, Router } from 'react-router';

export const ExperimentMenus = [
	{
		title: 'Lists',
		domain: '/experiment',
	},
	{
		title: 'My Experiments',
		domain: '/experiment/my',
	},
];

const ExperimentMy = () => {
	return <PageTemplate title="Experiments" menu={ExperimentMenus} />;
};

export default ExperimentMy;
