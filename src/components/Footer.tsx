import { Box, Typography } from '@mui/material';
import { SNUGRAY } from 'lib/constant';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
	width: 100vw;
	height: 150px;
	display: flex;
	flex-direction: column;
	margin: auto;
	align-items: center;
	justify-content: space-around;
	background-color: ${SNUGRAY};
`;

const FooterLabel = styled(Typography)`
	color: white;
`;
const Footer = () => {
	return (
		<FooterContainer>
			<FooterLabel variant="body1">
				서울대학교 언어학과, 서울특별시 관악구 관악로 1, 2동 108호 (151-745).
				linguist@snu.ac.kr 전화:(02)880-6164, 팩스:(02)882-2451.
			</FooterLabel>
			<FooterLabel variant="body1">
				Department of Linguistics, Seoul National University, Gwanak _ 1 Gwanak-ro, Seoul
				151-745, Korea, Tel:+82-2-880-6164, Fax:+82-2-882-2451.
			</FooterLabel>
		</FooterContainer>
	);
};

export default Footer;
