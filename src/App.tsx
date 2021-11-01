import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ExperimentMain from 'pages/Experiment/ExperimentMain';
import Header from 'components/Header';
import { observer, useObserver } from 'mobx-react';
import { Alert, Box, Snackbar, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import People from 'pages/People';
import ResearchProjects from 'pages/ResearchProjects';
import Footer from 'components/Footer';
import useStore from 'store/Index';
import ExperimentDetail from 'pages/Experiment/ExperimentDetail';
import TabNavigation from 'components/TabNavigation';
import { BrowserRouter } from 'react-router-dom';
import ExperimentMy from 'pages/Experiment/ExperimentMy';
import SignUp from 'pages/SignUp';
import EventsSchedule from 'pages/EventsNews/EventsSchedule';
import EventsColloquium from 'pages/EventsNews/EventsColloquium';
import EventsNews from 'pages/EventsNews/EventsNews';
import EventsSeminar from 'pages/EventsNews/EventsSeminar';
import TokenHeader from 'lib/api/TokenHeader';
import MyPage from 'pages/MyPage';

const theme = createTheme({
	typography: {
		fontFamily: 'YoonGothic',
	},
});

const App = observer(() => {
	const { ToastStore, TokenStore, UserStore } = useStore();

	const checkUser = async () => {
		const res = await TokenStore.getAccessToken();
		if (res) {
			TokenHeader.setAccessToken(TokenStore.accessToken);
			UserStore.getUserInfo();
		}
	};

	useEffect(() => {
		checkUser();
	}, []);

	return useObserver(() => (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<ThemeProvider theme={theme}>
				<Header />
				<TabNavigation />
				<Box sx={{ flex: 1, minHeight: '100vh' }}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/experiment" exact component={ExperimentMain} />
						<Route path="/experiment/my" exact component={ExperimentMy} />
						<Route path="/experiment/:id" exact component={ExperimentDetail} />
						<Route path="/people" exact component={People} />
						<Route path="/event/schedule" exact component={EventsSchedule} />
						<Route path="/event/colloquium" exact component={EventsColloquium} />
						<Route path="/event/news" exact component={EventsNews} />
						<Route path="/event/seminar" exact component={EventsSeminar} />
						<Route path="/research" exact component={ResearchProjects} />
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
	));
});

export default App;
