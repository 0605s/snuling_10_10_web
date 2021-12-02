import { DeleteRequest, GetRequest, PostRequest } from 'lib/api/requests';
import TokenHeader from 'lib/api/TokenHeader';
import { observable } from 'mobx';
import { TokenType } from 'types/token';
import { UserType } from 'types/user';
import TokenStore from './TokenStore';

const UserStore = observable({
	user: null as UserType | null,
	setUser(user: UserType | null) {
		this.user = user;
	},

	async sendEmail(email: string) {
		let success = false;
		try {
			const response = await PostRequest('signup/validate-send/', {
				email,
			});
			if (response) success = true;
		} catch (e: any) {
			console.error('========= SendEmail Error =========');
			console.error(e);
		}
		return success;
	},

	async validateEmail(email: string, code: string) {
		let success = false;
		let error = '';
		try {
			const response = await PostRequest('signup/validate/', {
				email,
				code,
			});
			error = response.data.error;
			if (response) success = true;
		} catch (e: any) {
			console.error('========= ValidateEmail Error =========');
			console.error(e);
		}
		return { success, error };
	},

	async signUp(email: string, pw: string) {
		let success = false;
		let code = 200;
		let token = '';
		try {
			const response = await PostRequest<TokenType>('signup/', {
				email,
				pw,
			});
			token = response.data.Token;
			code = response.status;
			success = true;
		} catch (e: any) {
			console.error('========= SignUp Error =========');
			code = e.response.status;
			console.error(e);
		}
		return { success, code, token };
	},

	async login(email: string, pw: string) {
		let success = false;
		let code = 200;
		let token = '';
		try {
			const response = await PostRequest<TokenType>('login/', {
				email,
				pw,
			});
			if (response.status === 200) {
				token = response.data.Token;
				code = response.status;
				success = true;
				await TokenStore.setAccessToken(response.data.Token);
				await TokenStore.saveAccessToken(response.data.Token);
				const res = await TokenHeader.setAccessToken(response.data.Token);
				if (res) this.getUserInfo();
			}
		} catch (e: any) {
			console.error('========= login Error =========');
			code = e.response.status;
			console.error(e);
		}
		return { success, code, token };
	},

	async getUserInfo() {
		let success = false;
		try {
			const response = await GetRequest<UserType>('mypage/');
			this.setUser(response.data);
			success = true;
		} catch (e: any) {
			console.error('========= getUserInfo Error =========');
			console.error(e);
		}
		return success;
	},

	async postUserInfo(favor: 'ONLINE' | 'OFFLINE', subscribe: boolean, lingual: string) {
		let success = false;
		try {
			console.log(favor, subscribe, lingual);
			const response = await PostRequest<UserType>('mypage/', {
				favor,
				subscribe,
				lingual,
			});
			this.setUser(response.data);
			success = true;
		} catch (e: any) {
			console.error('========= postUserInfo Error =========');
			console.error(e);
		}
		return success;
	},

	async deleteUser() {
		let success = false;
		try {
			const response = await DeleteRequest('mypage/');
			if (response.status === 200) {
				this.setUser(null);
				TokenStore.clear();
				success = true;
			}
		} catch (e: any) {
			console.error('========= deleteUser Error =========');
			console.error(e);
		}
		return success;
	},

	async logout() {
		let success = false;
		try {
			this.setUser(null);
			TokenStore.clear();
			success = true;
		} catch (e) {
			console.error('========= signOutUser Error =========');
			console.error(e);
		}
		return success;
	},
});

export default UserStore;
