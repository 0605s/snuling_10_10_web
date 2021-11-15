import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SNULIGHTYELLOW } from 'lib/constant';

const TabContainer = styled(Tabs)`
	width: 100vw;
	box-sizing: border-box;
	padding: 0px max(calc((100vw - 1000px) / 2), 5vw);
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	box-shadow: rgba(33, 35, 38, 0.3) 0px 10px 10px -10px;
	color: '#666666';
	z-index: 10;
	background-color: white;
`;

const MenuItem = styled(Tab)``;

const tabs: { title: string; url: string }[] = [
	{ title: 'People', url: '/people' },
	{ title: 'Events & News', url: '/event' },
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
		<TabContainer
			value={getLocation()}
			centered
			variant="fullWidth"
			textColor="inherit"
			indicatorColor="secondary"
		>
			{tabs.map((item) => {
				return (
					<MenuItem
						label={t(item.title)}
						value={item.url}
						key={item.title}
						onClick={() => history.push(`${item.url}`)}
						sx={{ fontSize: 16 }}
					/>
				);
			})}
		</TabContainer>
	);
};

export default TabNavigation;
