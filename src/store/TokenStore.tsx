import isValidToken from 'lib/token';
import { observable } from 'mobx';

const TokenStore = observable({
	accessToken: '' as string | null,

	setAccessToken(accessToken: string) {
		try {
			window.localStorage.setItem('ACCESS_TOKEN', accessToken);
			this.accessToken = accessToken;
		} catch (e) {
			console.error('========= setAccessToken Error =========');
			console.error(e);
		}
	},

	async getAccessToken() {
		let success = false;
		try {
			const data = await window.localStorage.getItem('ACCESS_TOKEN');
			// if (!data || !isValidToken(data)) return success;
			if (!data) this.accessToken = data;
			success = true;
		} catch (e) {
			console.error('========= getAccessToken Error =========');
			console.error(e);
		}
		return success;
	},

	async clear() {
		try {
			await window.localStorage.clear();
			this.accessToken = null;
		} catch (e) {
			console.error('========= clear Error =========');
			console.error(e);
		}
	},
});

export default TokenStore;
