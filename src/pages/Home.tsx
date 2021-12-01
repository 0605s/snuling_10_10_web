// import { useHistory } from 'react-router';
import styled from 'styled-components';
import { RowContainer, Title } from 'lib/constant/Components';

const Banner = styled.div`
	width: 100vw;
	height: 40vh;
	background-size: cover;
	background-image: url('${process.env.PUBLIC_URL}/img/snu_image_1.jpeg');
	/* filter: brightness(0.5); */
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	// const history = useHistory();

	return (
		<RowContainer>
			<Banner>{/* <Title>서울대학교 언어학과</Title> */}</Banner>
			{/* <div>홈페이지 제작중입니다. - team 0605s</div> */}
		</RowContainer>
	);
};

export default Home;
