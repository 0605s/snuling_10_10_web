import styled from 'styled-components';
import { Title } from 'lib/constant/Components';
import HomeMenu from 'components/home/HomeMenu';
import { useTranslation } from 'react-i18next';
import { SNUBLUE } from 'lib/constant';

const BannerLabel = styled.div`
	background: url('${process.env.PUBLIC_URL}/img/white_background.png');
	background-size: cover;
	background-position: center center;
	width: 100%;
	height: 40vh;
	padding: 5vh 5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	white-space: pre-wrap;
	color: ${SNUBLUE};
	font-weight: 500;
	font-size: 40px;
	@media screen and (max-width: 800px) {
		font-size: 30px;
	}
`;

const Home = () => {
	const { t } = useTranslation();
	return (
		<div data-aos="fade-up">
			<BannerLabel>{t('SNU Linguistics 10-10 project')}</BannerLabel>
			<HomeMenu />
		</div>
	);
};

export default Home;
