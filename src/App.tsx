import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ExperimentMain from 'pages/Experiment/ExperimentMain';
import Header from 'components/Header';
import { Container } from '@mui/material';

const App = () => {
	return (
		<Container component="main" maxWidth="lg">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/experiment" component={ExperimentMain} />
				<Route path="/login" component={Login} />
				<Redirect to="/" />
			</Switch>
		</Container>
	);
};

export default App;
