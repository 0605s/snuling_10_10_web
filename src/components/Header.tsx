import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import useStore from 'store/Index';
import { observer } from 'mobx-react';
import { SubContent } from 'lib/constant/Components';

const HeaderContainer = styled.div`
	width: 100vw;
	height: 100px;
	box-sizing: border-box;
	padding: 10px max(calc((100vw - 1000px) / 2), 5vw);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	/* background-color: SNU; */
`;

const SnulingLogo = styled.img`
	width: 200px;
	height: auto;
	opacity: 1;
	:hover {
		opacity: 0.8;
		cursor: pointer;
	}
`;

const LoginButton = styled(Button)``;

const EmailLabel = styled(SubContent)`
	font-weight: 500;
`;

const Header = observer(() => {
	const history = useHistory();
	const { i18n, t } = useTranslation();
	const { UserStore } = useStore();

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
			<Stack spacing={2} direction="row" alignItems="center">
				<Button variant="text" onClick={onClickChangeLanguage}>
					{i18n.language === 'ko' ? 'English' : '한국어'}
				</Button>
				{UserStore.user !== null ? (
					<>
						<EmailLabel>{UserStore.user?.username}</EmailLabel>
						<LoginButton variant="text" onClick={() => history.push('/mypage')}>
							{t('My Page')}
						</LoginButton>
					</>
				) : (
					<>
						<LoginButton variant="outlined" onClick={() => history.push('/login')}>
							{t('login')}
						</LoginButton>
						<LoginButton variant="text" onClick={() => history.push('/signup')}>
							{t('Sign Up')}
						</LoginButton>
					</>
				)}
			</Stack>
		</HeaderContainer>
	);
});

export default Header;
