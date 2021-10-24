import { PostRequest } from 'lib/api/requests';
import { observable } from 'mobx';
import { TokenType } from 'types/token';
import { UserType } from 'types/user';

const UserStore = observable({
	user: null as UserType | null,
	setUser(user: UserType | null) {
		this.user = user;
	},

	async signUpUserBasic(email: string, pw: string) {
		let success = false;
		let code = 200;
		let token: TokenType = { access: '', refresh: '' };

		try {
			const response = await PostRequest<{ user: UserType; token: TokenType }>('signup/', {
				email,
				pw,
			});
			this.setUser(response.data.user);
			token = { ...response.data.token };
			code = response.status;

			success = true;
		} catch (e: any) {
			console.error('========= signUpUserBasic Error =========');
			code = e.response.status;
			console.error(e);
		}

		return { success, code, token };
	},

	async signInUserBasic(email: string, password: string) {
		let success = false;
		let code = 200;
		let token: TokenType = { access: '', refresh: '' };

		try {
			const response = await PostRequest<{ user: UserType; token: TokenType }>(
				'/v1/auth/basic/signin/',
				{ email, password },
			);
			this.setUser(response.data.user);
			token = { ...response.data.token };
			code = response.status;

			success = true;
		} catch (e: any) {
			console.error('========= signInUserBasic Error =========');
			code = e.response.status;
			console.error(e);
		}

		return { success, code, token };
	},
});

export default UserStore;
