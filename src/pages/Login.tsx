import React, { useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

const Login = () => {
	const history = useHistory();
	// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	//   event.preventDefault();
	//   const data = new FormData(event.currentTarget);
	//   // eslint-disable-next-line no-console
	//   console.log({
	//     email: data.get('email'),
	//     password: data.get('password'),
	//   });
	// };
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
				Login
			</Typography>
			<Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
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
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
					Sign In
				</Button>
				{/* <Grid container>
              <Grid item xs>
                <Link href={}variant="body2">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link variant="body2">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid> */}
			</Box>
			{/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
		</Box>
	);
};

export default Login;
