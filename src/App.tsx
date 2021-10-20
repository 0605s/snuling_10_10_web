import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ExperimentMain from 'pages/Experiment/ExperimentMain';
import Header from 'components/Header';
import { Box } from '@mui/material';
import People from 'pages/People';
import EventsNews from 'pages/EventsNews';
import ResearchProjects from 'pages/ResearchProjects';
import Contact from 'pages/Contact';
import Footer from 'components/Footer';

const App = () => {
	return (
		<Box component="main">
			<Header />
			<Box sx={{ flex: 1, minHeight: '100vh' }}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/experiment" component={ExperimentMain} />
					<Route path="/people" component={People} />
					<Route path="/event" component={EventsNews} />
					<Route path="/research" component={ResearchProjects} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
					<Redirect to="/" />
				</Switch>
			</Box>
			<Footer />
		</Box>
	);
};

export default App;
