import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const MenuContainer = styled.div`
	width: 100vw;
	height: 90px;
	box-sizing: border-box;
	position: relative;
	padding: 0px max(calc((100vw - 1100px) / 2), 5vw);
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: rgba(33, 35, 38, 0.3) 0px 10px 10px -10px;
	z-index: 20;
	@media screen and (max-width: 800px) {
		height: 110px;
		padding: 0px;
		flex-direction: column;
		justify-content: space-around;
		font-size: 10px;
	}
`;

const MenuTab = styled(Tabs)`
	color: '#666666';
	@media screen and (max-width: 800px) {
		max-width: 100%;
	}
`;

const SnulingLogo = styled.img`
	width: 200px;
	height: auto;
	:hover {
		opacity: 0.8;
		cursor: pointer;
	}
	@media screen and (max-width: 800px) {
		width: 160px;
		margin: 10px 20px;
	}
`;

const MenuItem = styled(Tab)`
	height: 90px;
	@media screen and (max-width: 800px) {
		height: 30px;
	}
`;

const tabs: { title: string; url: string }[] = [
	{ title: 'news', url: '/news' },
	{ title: 'colloquium', url: '/colloquium' },
	{ title: 'seminar', url: '/seminar' },
	{ title: 'Experiments', url: '/experiment' },
];

const TabNavigation = () => {
	const location = useLocation();
	const history = useHistory();
	const { t } = useTranslation();

	const getLocation = () => {
		const firstPath = location.pathname.split('/')[1];
		if (['news', 'colloquium', 'seminar', 'experiment'].includes(firstPath))
			return `/${firstPath}`;
		return false;
	};
	if (location.pathname === '/') return null;
	return (
		<MenuContainer>
			<SnulingLogo
				src={`${process.env.PUBLIC_URL}/img/snuling_logo.png`}
				alt=""
				onClick={() => history.push('/')}
			/>
			<MenuTab
				value={getLocation()}
				variant="scrollable"
				textColor="inherit"
				indicatorColor="primary"
			>
				{tabs.map((item) => {
					return (
						<MenuItem
							label={t(item.title)}
							value={item.url}
							key={item.title}
							onClick={() => history.push(`${item.url}`)}
							sx={window.screen.width > 800 ? { fontSize: 16 } : { fontSize: 14 }}
							wrapped
						/>
					);
				})}
			</MenuTab>
		</MenuContainer>
	);
};

export default TabNavigation;
