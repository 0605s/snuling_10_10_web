import { SNUBLUE } from 'lib/constant';
import { RowContainer, SubContent } from 'lib/constant/Components';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled(RowContainer)`
	background-color: ${SNUBLUE};
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
	const { t } = useTranslation();
	return (
		<FooterContainer>
			<ColumnContainer type="left">
				<SnulingLogo
					src={`${process.env.PUBLIC_URL}/img/snuling_logo.png`}
					alt="snuling_logo"
				/>
				<FooterLabel>{t('address')}</FooterLabel>
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
