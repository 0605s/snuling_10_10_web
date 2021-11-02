import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import useStore from 'store/Index';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar, TextField, Button, FormGroup } from '@mui/material';
import styled from 'styled-components';
import { RowContainer } from 'lib/constant/Components';
import PersonIcon from '@mui/icons-material/Person';
import { checkEmail } from 'lib/reg';

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
	const [emailError, setEmailError] = useState<boolean>(false);
	const [pw, setPw] = useState<string>('');
	const [pwError, setPwError] = useState<boolean>(false);
	const [pwCheck, setPwCheck] = useState<string>('');
	const [pwCheckError, setPwCheckError] = useState<boolean>(false);

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
		} else if (pwCheck.trim().length === 0) {
			ToastStore.setMessage('warning', '비밀번호 확인을 입력하세요');
			setPwCheckError(true);
		} else if (pwCheck !== pw) {
			ToastStore.setMessage('warning', '비밀번호가 일치하지 않습니다');
			setPwCheckError(true);
		} else {
			await UserStore.signUp(email, pw);
			UserStore.login(email, pw);
			history.push('/');
			ToastStore.setMessage('success', '회원가입 성공');
		}
	};

	return (
		<SignUpContainer>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<PersonIcon />
			</Avatar>
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
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setPw(event.target.value)
					}
					error={pwError}
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
					error={pwCheckError}
				/>
			</FormContainer>
			<Button type="submit" size="medium" variant="contained" onClick={onSubmit}>
				{t('Sign Up')}
			</Button>
		</SignUpContainer>
	);
});

export default SignUp;
