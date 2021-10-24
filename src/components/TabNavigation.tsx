import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { SNUBLUE, SNUGRAY } from 'lib/constant';

const TabContainer = styled(Tabs)`
	width: 100vw;
	box-sizing: border-box;
	padding: 0px 10vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* background-color: ${SNUBLUE}; */
`;

const MenuItem = styled(Tab)`
	font-size: 20px;
`;

const tabs: { title: string; url: string }[] = [
	{ title: 'People', url: '/people' },
	{ title: 'Events & News', url: '/event' },
	{ title: 'Research & Projects', url: '/research' },
	{ title: '실험 참여', url: '/experiment' },
	{ title: 'Contact Us', url: '/contact' },
];

const TabNavigation = () => {
	const location = useLocation();
	const history = useHistory();

	const getLocation = () => {
		const firstPath = location.pathname.split('/')[1];
		if (['people', 'event', 'research', 'experiment', 'contact'].includes(firstPath))
			return `/${firstPath}`;
		return false;
	};

	return (
		<TabContainer value={getLocation()} centered variant="fullWidth">
			{tabs.map((item) => {
				return (
					<MenuItem
						label={item.title}
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
