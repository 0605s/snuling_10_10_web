import React, { useCallback } from 'react';
import LoginTemplate from 'components/template/LoginTemplate';

const Login = () => {
	// const onSubmit = useCallback((email: string, pw: string) => {
	// 	console.log(email, pw);
	// }, []);

	return <LoginTemplate type="Login" />;
};

export default Login;
