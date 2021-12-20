import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled.div`
	height: 200px;
	padding: 5px 5vw;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border-top: 15px white solid;
	background-color: #333333;
	@media screen and (max-width: 800px) {
		height: 150px;
	}
`;

const CopyrightContainer = styled.div`
	padding: 5px 5vw;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	background-color: #111111;
	text-align: left;
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
	color: white;
	text-align: left;
	@media screen and (max-width: 800px) {
		font-size: 7px;
		line-height: 16px;
	}
`;

const Footer = () => {
	const { t } = useTranslation();
	return (
		<>
			<FooterContainer>
				<SnulingLogo
					src={`${process.env.PUBLIC_URL}/img/snuling_logo_white.png`}
					alt="snuling_logo"
				/>
				<FooterLabel>{t('address')}</FooterLabel>
				<FooterLabel>{t('contacts')}</FooterLabel>
				{/* <FooterLabel>{t('copyright')}</FooterLabel> */}
			</FooterContainer>
			<CopyrightContainer>
				<FooterLabel>
					COPYRIGHT (C)2020 Department of Linguistics,, SEOUL NATIONAL UNIVERSITY.ALL
					RIGHTS RESERVED.
				</FooterLabel>
			</CopyrightContainer>
		</>
	);
};

export default Footer;
