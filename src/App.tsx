import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ExperimentMain from 'pages/Experiment/ExperimentMain';
import Header from 'components/Header';
import { Container } from '@mui/material';

const App = () => {
	return (
		<>
			<div>
				<Container component="main" maxWidth="lg">
					<Header />
					<Route path="/" component={Home} exact />
					<Route path="/experiment" component={ExperimentMain} />
					<Route path="/login" component={Login} />
				</Container>
			</div>
		</>
	);
};

export default App;
