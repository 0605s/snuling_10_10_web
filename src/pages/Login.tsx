import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import LoginTemplate from 'components/template/LoginTemplate';
import useStore from 'store/Index';

const Login = observer(() => {
	const { UserStore } = useStore();
	const history = useHistory();

	const onSubmit = useCallback(async (email: string, pw: string) => {
		const response = await UserStore.login(email, pw);
		history.push('/');
	}, []);

	return <LoginTemplate type="Login" onSubmit={onSubmit} />;
});

export default Login;
