import styled from 'styled-components';
import { Tab, Tabs, Box, Container } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';

const HeaderContainer = styled(Container)`
	width: 100vw;
	display: flex;
	flex-direction: row;
	height: 10vh;
	margin: auto;
	align-items: center;
	justify-content: space-around;
`;

const MenuItem = styled(Tab)`
	font-size: 20px;
`;

const LoginButton = styled(Button)`
	width: 50px;
`;

const tabs: { title: string; url: string }[] = [
	{ title: 'People', url: '/people' },
	{ title: 'Events & News', url: '/event' },
	{ title: 'Research & Projects', url: '/research' },
	{ title: '실험 참여', url: '/experiment' },
	{ title: 'Contact Us', url: '/contact' },
];

const Header = () => {
	const location = useLocation();
	const history = useHistory();

	const getLocation = () => {
		const firstPath = location.pathname.split('/')[1];
		if (['people', 'event', 'research', 'experiment', 'contact'].includes(firstPath))
			return `/${firstPath}`;
		return false;
	};

	return (
		<HeaderContainer maxWidth="xl" disableGutters>
			<Box onClick={() => history.push('/')}>
				<SchoolIcon />
			</Box>
			<Tabs value={getLocation()}>
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
			</Tabs>
			<LoginButton variant="contained" onClick={() => history.push('Login')}>
				Login
			</LoginButton>
		</HeaderContainer>
	);
};

export default Header;
