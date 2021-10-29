import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const TabContainer = styled(Tabs)`
	width: 100vw;
	box-sizing: border-box;
	padding: 10px max(calc((100vw - 1000px) / 2), 5vw);
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #cdcdcd;
`;

const MenuItem = styled(Tab)`
	font-size: 20px;
`;

const tabs: { title: string; url: string }[] = [
	{ title: 'People', url: '/people' },
	{ title: 'Events & News', url: '/event/schedule' },
	{ title: 'Research & Projects', url: '/research' },
	{ title: 'Experiments', url: '/experiment' },
	// { title: 'Contact Us', url: '/contact' },
];

const TabNavigation = () => {
	const location = useLocation();
	const history = useHistory();
	const { t } = useTranslation();

	const getLocation = () => {
		const firstPath = location.pathname.split('/')[1];
		if (['people', 'event', 'research', 'experiment'].includes(firstPath))
			return `/${firstPath}`;
		return false;
	};

	return (
		<TabContainer value={getLocation()} centered variant="fullWidth">
			{tabs.map((item) => {
				return (
					<MenuItem
						label={t(item.title)}
						value={item.url}
						key={item.title}
						onClick={() => history.push(`${item.url}`)}
					/>
				);
			})}
		</TabContainer>
	);
};

export default TabNavigation;
