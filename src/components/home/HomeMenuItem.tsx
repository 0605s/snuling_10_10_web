import styled from 'styled-components';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useTranslation } from 'react-i18next';

const MenuItem = styled.div`
	width: 100%;
	height: 300px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	cursor: pointer;
	border: 1px solid rgb(0, 0, 0, 0.8);
	:hover {
		font-size: 2rem;
		border: 1px solid rgb(0, 0, 0, 0.1);
	}
	@media screen and (max-width: 800px) {
		height: 150px;
	}
`;

const MenuImage = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	filter: grayscale(100%) brightness(0.3);
	transition: all 0.3s;
	object-fit: cover;
	font-size: 30px;
	:hover {
		cursor: pointer;
		filter: grayscale(0%) brightness(0.7);
		font-size: 40px;
	}
	@media screen and (max-width: 800px) {
		filter: grayscale(5%) brightness(0.3);
	}
`;

const ContentBox = styled.div`
	position: absolute;
	bottom: 100%;
	height: 50%;
	width: 100%;
	background-color: white;
	/*  */
`;

const TitleLabel = styled.div`
	opacity: 1;
	z-index: 10;
	transition: all 0.3s;
	margin-top: 20px;
`;

interface Props {
	item: { title: string; url: string };
}

const HomeMenuItem = ({ item }: Props) => {
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
		<MenuItem>
			<MenuImage src={`${process.env.PUBLIC_URL}/img/default_${item.title}.jpg`} />
			{getIcon(item.title)}
			<TitleLabel>{t(item.title).toUpperCase()}</TitleLabel>
		</MenuItem>
	);
};

export default HomeMenuItem;
