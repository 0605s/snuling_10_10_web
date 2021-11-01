import { observable } from 'mobx';

const TokenStore = observable({
	accessToken: '' as string,
	setAccessToken(token: string) {
		this.accessToken = token;
	},
	saveAccessToken(accessToken: string) {
		try {
			window.localStorage.setItem('ACCESS_TOKEN', accessToken);
		} catch (e) {
			console.error('========= setAccessToken Error =========');
			console.error(e);
		}
	},

	async getAccessToken() {
		let success = false;
		try {
			const data = await window.localStorage.getItem('ACCESS_TOKEN');
			if (data && data !== null) this.setAccessToken(data);
			success = true;
		} catch (e) {
			console.error('========= getAccessToken Error =========');
			console.error(e);
		}
		return success;
	},

	async clear() {
		let success = false;
		try {
			await window.localStorage.clear();
			this.setAccessToken('');
			success = true;
		} catch (e) {
			console.error('========= clear Error =========');
			console.error(e);
		}
		return success;
	},
});

export default TokenStore;
