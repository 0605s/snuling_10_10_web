import styled from 'styled-components';
import { RowContainer, Title } from 'lib/constant/Components';
import HomeMenu from 'components/home/HomeMenu';
import { SNUBLUE, SNUGRAY, SNULIGHTBLUE } from 'lib/constant';

const Banner = styled.div`
	width: 100vw;
	height: 40vh;
	/* background-size: cover;k */
	/* background-image: linear-gradient(SNUBLUE, pink); */
	color: white;
	/* background-image: url('${process.env.PUBLIC_URL}/img/snu_image_1.jpeg'); */
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	return (
		<div>
			<Banner style={{ background: `linear-gradient(${SNUBLUE}, #061C30` }}>
				<Title>서울대학교 언어학과 10-10 프로젝트</Title>
			</Banner>
			<HomeMenu />
		</div>
	);
};

export default Home;
