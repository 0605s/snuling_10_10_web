import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Content } from 'lib/constant/Components';

const tabs: { title: string; url: string }[] = [
	{ title: 'news', url: '/news' },
	{ title: 'colloquium', url: '/colloquium' },
	{ title: 'seminar', url: '/seminar' },
	{ title: 'experiments', url: '/experiment' },
];

const MenuItem = styled.div`
	width: 100%;
	height: 50vh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* color: white; */
	cursor: pointer;
	:hover {
		font-size: 2rem;
	}
`;

const MenuImage = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	filter: grayscale(80%) opacity(0.5);
	transition: all 0.3s;
	object-fit: cover;
	font-size: 30px;
	:hover {
		cursor: pointer;
		filter: grayscale(0%) opacity(0.8);
		font-size: 40px;
	}
`;

const TitleLabel = styled.div`
	opacity: 1;
	z-index: 10;
	transition: all 0.3s;
	margin-top: 20px;
`;

const HomeMenu = () => {
	const history = useHistory();
	const { t } = useTranslation();
	const getIcon = (type: string) => {
		switch (type) {
			case 'news':
				return <MenuBookIcon sx={{ fontSize: 40, zIndex: 3 }} />;
			case 'colloquium':
				return <AccountBalanceIcon sx={{ fontSize: 40, zIndex: 3 }} />;
			case 'seminar':
				return <SchoolIcon sx={{ fontSize: 40, zIndex: 3 }} />;
			case 'experiments':
				return <ScienceIcon sx={{ fontSize: 40, zIndex: 3 }} />;
			default:
				return null;
		}
	};
	return (
		<Grid container direction="row">
			{tabs.map((item) => {
				return (
					<Grid
						item
						md={3}
						xs={6}
						key={item.title}
						onClick={() => {
							history.push(item.url);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						<MenuItem>
							<MenuImage
								src={`${process.env.PUBLIC_URL}/img/default_${item.title}.jpg`}
							/>
							{getIcon(item.title)}
							<TitleLabel>{t(item.title)}</TitleLabel>
						</MenuItem>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default HomeMenu;
