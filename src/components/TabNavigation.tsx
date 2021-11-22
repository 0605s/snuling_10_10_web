import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const MenuContainer = styled.div`
	width: 100vw;
	height: 90px;
	box-sizing: border-box;
	padding: 0px max(calc((100vw - 1000px) / 2), 5vw);
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: rgba(33, 35, 38, 0.3) 0px 10px 10px -10px;
	z-index: 10;
`;

const MenuTab = styled(Tabs)`
	color: '#666666';
`;

const SnulingLogo = styled.img`
	width: 200px;
	height: auto;
	/* opacity: 1; */
	:hover {
		opacity: 0.8;
		cursor: pointer;
	}
`;

const MenuItem = styled(Tab)`
	height: 90px;
`;

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
		<MenuContainer>
			<SnulingLogo
				src={`${process.env.PUBLIC_URL}/img/snuling_logo.png`}
				alt=""
				onClick={() => history.push('/')}
			/>
			<MenuTab value={getLocation()} centered textColor="inherit" indicatorColor="primary">
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
			</MenuTab>
		</MenuContainer>
	);
};

export default TabNavigation;
