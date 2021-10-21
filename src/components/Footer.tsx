import { SNUGRAY } from 'lib/constant';
import { RowContainer, SubContent } from 'lib/constant/Components';
import styled from 'styled-components';

const FooterContainer = styled(RowContainer)`
	background-color: ${SNUGRAY};
`;

const InnerContainer = styled.div`
	width: min(100vw, 1500px);
	height: 150px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const FooterLabel = styled(SubContent)`
	color: white;
	text-align: center;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<InnerContainer>
				<FooterLabel>
					서울대학교 언어학과, 서울특별시 관악구 관악로 1, 2동 108호 (151-745).
					linguist@snu.ac.kr 전화:(02)880-6164, 팩스:(02)882-2451.
				</FooterLabel>
				<FooterLabel>
					Department of Linguistics, Seoul National University, Gwanak _ 1 Gwanak-ro,
					Seoul 151-745, Korea, Tel:+82-2-880-6164, Fax:+82-2-882-2451.
				</FooterLabel>
			</InnerContainer>
		</FooterContainer>
	);
};

export default Footer;
