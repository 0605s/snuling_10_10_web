import styled from 'styled-components';
import { RowContainer, Title } from 'lib/constant/Components';
import HomeMenu from 'components/home/HomeMenu';
import { SNUBLUE, SNUGRAY, SNULIGHTBLUE } from 'lib/constant';

const Banner = styled.div`
	width: 100vw;
	height: 50vh;
	/* color: white; */
	background: url('${process.env.PUBLIC_URL}/img/snuling.jpg');
	background-size: cover;
	background-position: center center;
	filter: brightness(0.3);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BannerLabel = styled(Title)`
	position: absolute;
	top: 12.5vh;
	width: 100%;
	padding: 12.5vh 0px;
	text-align: center;
	filter: brightness(1);
	backdrop-filter: blur(5px); /* apply the blur */
	color: white;
	white-space: pre-wrap;
`;

const Home = () => {
	return (
		<div>
			<Banner />
			<BannerLabel>{`서울대학교 언어학과 \n 10-10 프로젝트`}</BannerLabel>
			<HomeMenu />
		</div>
	);
};

export default Home;
