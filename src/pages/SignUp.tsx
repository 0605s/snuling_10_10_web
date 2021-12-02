import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import useStore from 'store/Index';
import { useTranslation } from 'react-i18next';
import { TextField, Button, InputAdornment } from '@mui/material';
import styled from 'styled-components';
import { checkEmail } from 'lib/reg';
import LoginTemplate from 'components/template/LoginTemplate';
import { SubTitle } from 'lib/constant/Components';

const SignUp = observer(() => {
	const { UserStore, ToastStore } = useStore();
	const history = useHistory();
	const { t } = useTranslation();

	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<boolean>(false);
	const [codeInputVisible, setCodeInputVisible] = useState<boolean>(false);
	const [code, setCode] = useState<string>('');
	const [codeError, setCodeError] = useState<boolean>(false);
	const [codeCheck, setCodeCheck] = useState<boolean>(false);
	const [pw, setPw] = useState<string>('');
	const [pwError, setPwError] = useState<boolean>(false);
	const [pwCheck, setPwCheck] = useState<string>('');
	const [pwCheckError, setPwCheckError] = useState<boolean>(false);

	const onClickEmail = () => {
		if (email.trim().length === 0) {
			ToastStore.setMessage('warning', '이메일을 입력해주세요');
			setEmailError(true);
		} else if (!checkEmail(email.trim())) {
			ToastStore.setMessage('warning', '올바른 형식의 이메일을 입력해주세요');
			setEmailError(true);
		} else {
			UserStore.sendEmail(email);
			setEmailError(false);
			setCodeInputVisible(true);
		}
	};

	const onClickCheckCode = async () => {
		const res = await UserStore.validateEmail(email, code);
		if (res.error) {
			ToastStore.setMessage('warning', '인증번호가 일치하지 않습니다. 다시 확인해주세요.');
			setCodeError(true);
		} else {
			setCodeError(false);
			setCodeCheck(true);
		}
	};

	const onSubmit = async () => {
		if (!codeCheck) {
			ToastStore.setMessage('warning', '이메일 인증을 해주세요.');
			setEmailError(true);
		} else if (pw.trim().length === 0) {
			ToastStore.setMessage('warning', '패스워드를 입력하세요');
			setPwError(true);
		} else if (pwCheck.trim().length === 0) {
			ToastStore.setMessage('warning', '패스워드 확인을 입력하세요');
			setPwCheckError(true);
		} else if (pwCheck !== pw) {
			ToastStore.setMessage('warning', '패스워드가 일치하지 않습니다');
			setPwCheckError(true);
		} else {
			await UserStore.signUp(email, pw);
			UserStore.login(email, pw);
			history.push('/');
			ToastStore.setMessage('success', '회원가입 성공');
		}
	};

	return (
		<LoginTemplate>
			<SubTitle>{t('Sign Up')}</SubTitle>
			<TextField
				margin="normal"
				required
				label={t('Email Address')}
				fullWidth
				autoFocus
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(event.target.value)
				}
				error={emailError}
				disabled={codeInputVisible}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Button
								variant="contained"
								onClick={onClickEmail}
								disabled={codeInputVisible}
							>
								{codeInputVisible ? '메일 발송 완료' : '인증 메일 발송'}
							</Button>
						</InputAdornment>
					),
				}}
			/>
			{codeInputVisible && (
				<TextField
					margin="normal"
					required
					label="메일에서 인증번호를 확인하고 입력해주세요"
					fullWidth
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setCode(event.target.value)
					}
					error={codeError}
					disabled={codeCheck}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Button
									variant="contained"
									onClick={onClickCheckCode}
									disabled={codeCheck}
								>
									{codeCheck ? '인증 성공' : '인증하기'}
								</Button>
							</InputAdornment>
						),
					}}
				/>
			)}
			<TextField
				margin="normal"
				required
				label={t('Password')}
				type="password"
				fullWidth
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPw(event.target.value)}
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
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setPwCheck(event.target.value)
				}
				error={pwCheckError}
			/>
			<Button
				type="submit"
				sx={{ marginTop: '10px' }}
				variant="contained"
				onClick={onSubmit}
				fullWidth
			>
				{t('Sign Up')}
			</Button>
		</LoginTemplate>
	);
});

export default SignUp;
