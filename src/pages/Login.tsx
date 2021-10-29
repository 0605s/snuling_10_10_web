import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import useStore from 'store/Index';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar, TextField, Button, FormGroup } from '@mui/material';
// import { LockOutlinedIcon } from '@mui/material/LockOutlinedIcon';
import styled from 'styled-components';
import { RowContainer } from 'lib/constant/Components';

const LoginContainer = styled(RowContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
`;

const Login = observer(() => {
	const { UserStore, ToastStore } = useStore();
	const history = useHistory();
	const { t } = useTranslation();
	const [email, setEmail] = useState<string>('');
	const [pw, setPw] = useState<string>('');

	const onSubmit = async () => {
		if (email.trim().length === 0) {
			ToastStore.setMessage('warning', '이메일을 입력해주세요');
		} else if (pw.trim().length === 0) {
			ToastStore.setMessage('warning', '비밀번호를 입력하세요');
		} else {
			const result = await UserStore.login(email, pw);
			if (result && result.code === 404) {
				ToastStore.setMessage('error', '존재하지 않는 계정입니다');
			} else if (result && result.code >= 500) {
				ToastStore.setMessage('error', '서버 오류');
			} else {
				ToastStore.setMessage('success', ` ${email}로 로그인 되었습니다.`);
				history.push('/');
			}
		}
	};

	return (
		<LoginContainer>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>{/* <LockOutlinedIcon /> */}</Avatar>
			<Typography component="h1" variant="h5">
				{t('login')}
			</Typography>
			<FormContainer>
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
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setPw(event.target.value)
					}
				/>
			</FormContainer>
			{/* <FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/> */}
			<Button variant="text" size="medium" onClick={() => history.push('/signup')}>
				계정이 없으신가요?
			</Button>
			<Button type="submit" size="medium" variant="contained" onClick={onSubmit}>
				{t('login')}
			</Button>
		</LoginContainer>
	);
});

export default Login;
