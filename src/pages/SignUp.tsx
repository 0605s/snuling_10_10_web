import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import useStore from 'store/Index';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar, TextField, Button, FormGroup } from '@mui/material';
import styled from 'styled-components';
import { RowContainer } from 'lib/constant/Components';

const SignUpContainer = styled(RowContainer)`
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

const SignUp = observer(() => {
	const { UserStore, ToastStore } = useStore();
	const history = useHistory();
	const { t } = useTranslation();
	const [email, setEmail] = useState<string>('');
	const [pw, setPw] = useState<string>('');
	const [pwCheck, setPwCheck] = useState<string>('');

	const onSubmit = () => {
		if (email.trim().length === 0) {
			ToastStore.setMessage('warning', '이메일을 입력해주세요');
		} else if (pw.trim().length === 0) {
			ToastStore.setMessage('warning', '비밀번호를 입력하세요');
		} else if (pwCheck !== pw) {
			ToastStore.setMessage('warning', '비밀번호가 일치하지 않습니다');
		} else {
			UserStore.signUp(email, pw);
			history.push('/');
		}
	};

	return (
		<SignUpContainer>
			{/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar> */}
			<Typography component="h1" variant="h5">
				{t('Sign Up')}
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
						setPwCheck(event.target.value)
					}
				/>
			</FormContainer>
			{/* <FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/> */}
			<Button type="submit" size="medium" variant="contained" onClick={onSubmit}>
				{t('Sign Up')}
			</Button>
		</SignUpContainer>
	);
});

export default SignUp;
