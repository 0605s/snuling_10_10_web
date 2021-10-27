import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ButtonGroup, Stack } from '@mui/material';

const HeaderContainer = styled.div`
	width: 100vw;
	height: 100px;
	box-sizing: border-box;
	padding: 10px max(calc((100vw - 1000px) / 2), 5vw);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const SnulingLogo = styled.img`
	width: 200px;
	height: auto;
	opacity: 1;
`;

const LoginButton = styled(Button)``;

const Header = () => {
	const history = useHistory();
	const { i18n, t } = useTranslation();

	const onClickChangeLanguage = () => {
		if (i18n.language === 'ko') i18n.changeLanguage('en');
		else if (i18n.language === 'en') i18n.changeLanguage('ko');
	};

	return (
		<HeaderContainer>
			<SnulingLogo
				src={`${process.env.PUBLIC_URL}/img/snuling_logo.png`}
				alt=""
				onClick={() => history.push('/')}
			/>
			<Stack spacing={2} direction="row">
				<Button variant="text" onClick={onClickChangeLanguage}>
					{i18n.language === 'ko' ? 'English' : '한국어'}
				</Button>
				<LoginButton variant="contained" onClick={() => history.push('/login')}>
					{t('login')}
				</LoginButton>
				<LoginButton variant="text" onClick={() => history.push('/login')}>
					{t('Sign Up')}
				</LoginButton>
			</Stack>
		</HeaderContainer>
	);
};

export default Header;
