import { GetRequest, PostRequest } from 'lib/api/requests';
import { observable } from 'mobx';
import { TokenType } from 'types/token';
import { UserType } from 'types/user';

const UserStore = observable({
	userEmail: '' as string | null,
	user: null as UserType | null,
	setUserEmail(email: string | null) {
		this.userEmail = email;
	},
	setUser(user: UserType | null) {
		this.user = user;
	},

	isLoggedIn() {
		console.log(this.userEmail);
		if (this.userEmail === null) return false;
		return true;
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
			this.setUserEmail(email);
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
			this.setUserEmail(email);
			token = response.data.Token;
			code = response.status;
			success = true;
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

	async postUserInfo(userInfo: UserType) {
		let success = false;
		try {
			const response = await PostRequest<UserType>('mypage/', {
				favor: userInfo.favor,
				subscribe: userInfo.subscribe,
				lingual: userInfo.lingual,
			});
			this.setUser(response.data);
			success = true;
		} catch (e: any) {
			console.error('========= postUserInfo Error =========');
			console.error(e);
		}
		return success;
	},

	async logout() {
		let success = false;
		try {
			this.setUser(null);
			this.setUserEmail(null);
			success = true;
		} catch (e) {
			console.error('========= signOutUser Error =========');
			console.error(e);
		}
		return success;
	},
});

export default UserStore;
