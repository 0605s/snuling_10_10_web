import styled from 'styled-components';
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import useStore from 'store/Index';
import { useTranslation } from 'react-i18next';
import { TextField, Button } from '@mui/material';
import { checkEmail } from 'lib/reg';
import LoginTemplate from 'components/template/LoginTemplate';
import { SubTitle } from 'lib/constant/Components';

const Login = observer(() => {
	const { UserStore, ToastStore } = useStore();
	const history = useHistory();
	const { t } = useTranslation();
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<boolean>(false);
	const [pw, setPw] = useState<string>('');
	const [pwError, setPwError] = useState<boolean>(false);

	const onSubmit = async () => {
		if (email.trim().length === 0) {
			ToastStore.setMessage('warning', '이메일을 입력해주세요');
			setEmailError(true);
		} else if (!checkEmail(email.trim())) {
			ToastStore.setMessage('warning', '올바른 형식의 이메일을 입력해주세요');
			setEmailError(true);
		} else if (pw.trim().length === 0) {
			ToastStore.setMessage('warning', '비밀번호를 입력하세요');
			setPwError(true);
		} else {
			const result = await UserStore.login(email, pw);
			if (!result || result.code >= 500) {
				ToastStore.setMessage('error', '서버 오류');
			} else if (result && result.code >= 401 && result) {
				ToastStore.setMessage('error', '존재하지 않는 계정이거나 비밀번호가 틀립니다');
				setEmailError(true);
				setPwError(true);
			} else {
				ToastStore.setMessage('success', `${email}로 로그인 되었습니다.`);
				history.goBack();
			}
		}
	};

	return (
		<LoginTemplate>
			<SubTitle>{t('login')}</SubTitle>
			<TextField
				margin="normal"
				required
				id="email"
				label={t('Email Address')}
				name="email"
				autoComplete="email"
				fullWidth
				autoFocus
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(event.target.value)
				}
				error={emailError}
			/>
			<TextField
				margin="normal"
				required
				name="password"
				label={t('Password')}
				type="password"
				id="password"
				fullWidth
				autoComplete="current-password"
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPw(event.target.value)}
				error={pwError}
				onKeyPress={(e) => {
					if (e.key === 'Enter') onSubmit();
				}}
			/>
			<Button variant="text" size="medium" onClick={() => history.push('/signup')}>
				계정이 없으신가요?
			</Button>
			<Button type="submit" size="medium" variant="contained" onClick={onSubmit} fullWidth>
				{t('login')}
			</Button>
		</LoginTemplate>
	);
});

export default Login;
