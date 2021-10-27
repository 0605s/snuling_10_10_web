import { SNUGRAY } from 'lib/constant';
import { RowContainer, SubContent } from 'lib/constant/Components';
import styled from 'styled-components';

const FooterContainer = styled(RowContainer)`
	background-color: ${SNUGRAY};
	height: 200px;
	padding: 0px 10vw;
	display: flex;
	flex-direction: row;
`;

const ColumnContainer = styled.div<{ type: 'left' | 'right' }>`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: ${(props) => props.type === 'right' && 'flex-end'};
`;

const SnulingLogo = styled.img`
	width: 200px;
	height: auto;
	opacity: 1;
	margin-bottom: 20px;
	:hover {
		cursor: pointer;
	}
`;

const FooterLabel = styled(SubContent)`
	color: white;
	text-align: left;
	line-height: 25px;
	text-decoration: none;
`;

const siteList: { name: string; url: string }[] = [
	{ name: '언어학과 홈페이지', url: 'http://hosting01.snu.ac.kr/~linguist/' },
	{ name: '서울대학교 인문대학', url: 'http://humanities.snu.ac.kr' },
];
const Footer = () => {
	return (
		<FooterContainer>
			<ColumnContainer type="left">
				<SnulingLogo
					src={`${process.env.PUBLIC_URL}/img/snuling_logo.png`}
					alt="snuling_logo"
				/>
				{/* <FooterLabel>
						서울대학교 언어학과, 서울특별시 관악구 관악로 1, 2동 108호 (151-745)
					</FooterLabel>
					<FooterLabel>
						Contact: linguist@snu.ac.kr 전화:(02)880-6164, 팩스:(02)882-2451.
					</FooterLabel> */}
				<FooterLabel>
					Department of Linguistics, Seoul National University, Gwanak_1 Gwanak-ro, Seoul
					151-745, Korea {`\n`} Tel:+82-2-880-6164, Fax:+82-2-882-2451.
				</FooterLabel>
			</ColumnContainer>
			<ColumnContainer type="right">
				<FooterLabel>관련 사이트</FooterLabel>
				{siteList.map((item) => {
					return (
						<a href={item.url} key={item.name} target="_blank" rel="noreferrer">
							<FooterLabel>{item.name}</FooterLabel>
						</a>
					);
				})}
			</ColumnContainer>
		</FooterContainer>
	);
};

export default Footer;
