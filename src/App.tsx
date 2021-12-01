import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ExperimentMain from 'pages/Experiment/ExperimentMain';
import Header from 'components/Header';
import { observer } from 'mobx-react';
import { Alert, Box, CssBaseline, Snackbar, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Footer from 'components/Footer';
import useStore from 'store/Index';
import ExperimentDetail from 'pages/Experiment/ExperimentDetail';
import TabNavigation from 'components/TabNavigation';
import { BrowserRouter } from 'react-router-dom';
import SignUp from 'pages/SignUp';
import TokenHeader from 'lib/api/TokenHeader';
import MyPage from 'pages/MyPage/MyPage';
import { SNUBLUE, SNULIGHTBLUE, SNULIGHTYELLOW, SNUYELLOW } from 'lib/constant';
import PostList from 'pages/PostList';
import PostDetail from 'pages/PostDetail';

const theme = createTheme({
	palette: {
		primary: {
			light: SNULIGHTBLUE,
			main: SNUBLUE,
		},
		secondary: {
			light: SNULIGHTYELLOW,
			main: SNUYELLOW,
		},
		background: {
			default: '#ffffff',
		},
	},
	typography: {
		fontFamily: 'YoonGothic',
	},
});

const App = observer(() => {
	const [loading, setLoading] = useState<boolean>(true);
	const { ToastStore, TokenStore, UserStore } = useStore();

	const checkUser = async () => {
		const res = await TokenStore.getAccessToken();
		if (res) {
			TokenHeader.setAccessToken(TokenStore.accessToken);
			await UserStore.getUserInfo();
			setLoading(false);
		}
	};

	useEffect(() => {
		checkUser();
		AOS.init({
			duration: 1000,
		});
	}, []);

	if (loading) return null;
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<TabNavigation />
				<Box sx={{ flex: 1, minHeight: '80vh' }}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/experiment" exact component={ExperimentMain} />
						<Route path="/experiment/:id" exact component={ExperimentDetail} />
						<Route
							path="/seminar"
							exact
							render={() => <PostList postType="seminar" />}
						/>
						<Route path="/seminar/:postId" exact component={PostDetail} />
						<Route
							path="/colloquium"
							exact
							render={() => <PostList postType="colloquium" />}
						/>
						<Route path="/colloquium/:postId" exact component={PostDetail} />
						<Route path="/news" exact render={() => <PostList postType="news" />} />
						<Route path="/schedule/:postId" exact component={PostDetail} />
						<Route path="/login" exact component={Login} />
						<Route path="/signup" exact component={SignUp} />
						<Route path="/mypage" exact component={MyPage} />
						<Redirect to="/" />
					</Switch>
				</Box>
				<Footer />
				<Snackbar
					autoHideDuration={4000}
					open={ToastStore.isOpen}
					onClose={() => ToastStore.setIsOpen(false)}
				>
					<Alert severity={ToastStore.message.type}>{ToastStore.message.text}</Alert>
				</Snackbar>
			</ThemeProvider>
		</BrowserRouter>
	);
});

export default App;
