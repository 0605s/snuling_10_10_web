import isValidToken from 'lib/token';
import { observable } from 'mobx';

const TokenStore = observable({
	accessToken: '' as string,
	refreshToken: '' as string,

	setAccessToken(accessToken: string) {
		this.accessToken = accessToken;
	},
	setRefreshToken(refreshToken: string) {
		this.refreshToken = refreshToken;
	},

	async saveAndSetTokens(accessToken: string, refreshToken: string) {
		let success = false;

		try {
			await window.localStorage.multiSet([
				['ACCESS_TOKEN', accessToken],
				['REFRESH_TOKEN', refreshToken],
			]);
			this.setAccessToken(this.accessToken);
			this.setRefreshToken(this.refreshToken);
			success = true;
		} catch (e) {
			console.error('========= setAccessToken Error =========');
			console.error(e);
		}

		return success;
	},

	async getAccessToken() {
		let success = false;

		try {
			this.setAccessToken('');
			const data = await window.localStorage.getItem('ACCESS_TOKEN');
			if (!data || !isValidToken(data)) return success;
			this.accessToken = data;
			success = true;
		} catch (e) {
			console.error('========= getAccessToken Error =========');
			console.error(e);
		}

		return success;
	},

	async getRefreshToken() {
		let success = false;

		try {
			this.setRefreshToken('');
			const data = await window.localStorage.getItem('REFRESH_TOKEN');
			if (!data || !isValidToken(data)) return success;
			this.refreshToken = data;
			success = true;
		} catch (e) {
			console.error('========= getRefreshToken Error =========');
			console.error(e);
		}

		return success;
	},

	async clear() {
		let success = false;
		try {
			await window.localStorage.clear();
			this.setAccessToken('');
			this.setRefreshToken('');
			success = true;
		} catch (e) {
			console.error('========= clear Error =========');
			console.error(e);
		}
		return success;
	},
});

export default TokenStore;
