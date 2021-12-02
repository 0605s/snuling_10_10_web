import styled from 'styled-components';
import { RowContainer, Title } from 'lib/constant/Components';
import HomeMenu from 'components/home/HomeMenu';

const Banner = styled.div`
	width: 100vw;
	height: 40vh;
	background-size: cover;
	/* background-image: url('${process.env.PUBLIC_URL}/img/snu_image_1.jpeg'); */
	/* filter: brightness(0.5); */
	/* color: white; */
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	return (
		<div>
			<Banner>
				<Title>서울대학교 언어학과</Title>
			</Banner>
			<HomeMenu />
		</div>
	);
};

export default Home;
