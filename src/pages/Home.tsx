import styled from 'styled-components';
import { Title } from 'lib/constant/Components';
import HomeMenu from 'components/home/HomeMenu';
import { useTranslation } from 'react-i18next';

const Banner = styled.div`
	width: 100vw;
	height: 50vh;
	background: url('${process.env.PUBLIC_URL}/img/snuling.jpg');
	background-size: cover;
	background-position: center center;
	filter: brightness(0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BannerLabel = styled(Title)`
	position: absolute;
	top: 9vh;
	width: 100%;
	padding: 12vh 5vw;
	text-align: center;
	filter: brightness(1);
	backdrop-filter: blur(5px); /* apply the blur */
	color: white;
	white-space: pre-wrap;
`;

const Home = () => {
	const { t } = useTranslation();
	return (
		<div data-aos="fade">
			<Banner />
			<BannerLabel>{t('SNU Linguistics 10-10 project')}</BannerLabel>
			<HomeMenu />
		</div>
	);
};

export default Home;
