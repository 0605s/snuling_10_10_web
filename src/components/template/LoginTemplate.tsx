import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useHistory } from 'react-router';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const FormBox = styled(Box)`
	justify-content: space-around;
`;

const SubmitButton = styled(Button)`
	display: in-line;
	width: 100px;
	height: 30px;
`;

interface Props {
	type: 'Login' | 'Sign In';
	// onSubmit: (email: string, pw: string) => void;
}

const LoginTemplate = ({ type }: Props) => {
	const history = useHistory();
	const [id, setId] = useState<string>('');
	const [pw, setPw] = useState<string>('');

	const onSubmit = useCallback(() => {
		history.push('/');
	}, []);

	return (
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				{type}
			</Typography>
			<FormBox component="form" onSubmit={onSubmit}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
				/>
				{/* <FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/> */}
				<Button variant="text" fullWidth size="medium">
					계정이 없으신가요?
				</Button>
				<Button type="submit" fullWidth size="medium" variant="contained">
					{type}
				</Button>
			</FormBox>
		</Box>
	);
};

export default LoginTemplate;
