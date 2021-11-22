import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import useStore from 'store/Index';
import { observer } from 'mobx-react';
import { SubContent } from 'lib/constant/Components';
import { SNUBLUE } from 'lib/constant';

const HeaderContainer = styled.div`
	width: 100vw;
	height: 30px;
	box-sizing: border-box;
	padding: 10px max(calc((100vw - 1000px) / 2), 5vw);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	background-color: ${SNUBLUE};
	color: white;
`;

const LoginButton = styled(Button)`
	color: white;
`;

const EmailLabel = styled(SubContent)`
	font-size: 0.8rem;
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
			<Stack spacing={2} direction="row" alignItems="center">
				<Button variant="text" onClick={onClickChangeLanguage} size="small" color="inherit">
					{i18n.language === 'ko' ? 'English' : '한국어'}
				</Button>
				{UserStore.user !== null ? (
					<>
						<EmailLabel>{UserStore.user?.username}</EmailLabel>
						<LoginButton
							variant="text"
							onClick={() => history.push('/mypage')}
							size="small"
							color="inherit"
						>
							{t('My Page')}
						</LoginButton>
					</>
				) : (
					<>
						<LoginButton
							variant="text"
							onClick={() => history.push('/login')}
							size="small"
							color="inherit"
						>
							{t('login')}
						</LoginButton>
						<LoginButton
							variant="text"
							onClick={() => history.push('/signup')}
							size="small"
							color="inherit"
						>
							{t('Sign Up')}
						</LoginButton>
					</>
				)}
			</Stack>
		</HeaderContainer>
	);
});

export default Header;
