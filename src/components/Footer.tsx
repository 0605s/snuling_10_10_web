import { SNUBLUE, SNUYELLOW, SNUGRAY } from 'lib/constant';
import { RowContainer, SubContent } from 'lib/constant/Components';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled(RowContainer)`
	height: 200px;
	padding: 0px 10vw;
	display: flex;
	flex-direction: row;
	border-top: 15px ${SNUBLUE} solid;
	@media screen and (max-width: 800px) {
		padding: 0px 5vw;
		height: 150px;
	}
`;

const ColumnContainer = styled.div<{ type: 'left' | 'right' }>`
	flex: ${(props) => (props.type === 'right' ? 1 : 2)};
	display: flex;
	flex-direction: column;
	align-items: center;
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
	@media screen and (max-width: 800px) {
		width: 150px;
		margin-bottom: 10px;
	}
`;

const FooterLabel = styled.div`
	font-size: 14px;
	line-height: 25px;
	color: ${SNUGRAY};
	text-align: center;
	@media screen and (max-width: 800px) {
		font-size: 10px;
		line-height: 16px;
	}
`;

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
				<FooterLabel>{t('contacts')}</FooterLabel>
				{/* <FooterLabel>{t('copyright')}</FooterLabel> */}
			</ColumnContainer>
		</FooterContainer>
	);
};

export default Footer;
