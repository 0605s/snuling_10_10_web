class TokenHeader {
	static accessToken = '';

	static setAccessToken(accessToken: string) {
		let res = false;
		try {
			this.accessToken = accessToken;
			res = true;
		} catch (e) {
			console.error(e);
		}
		return res;
	}

	static getHeader(params?: object) {
		return {
			headers: {
				Authorization: this.accessToken === '' ? undefined : `Token ${this.accessToken}`,
			},
			params,
		};
	}
}

export default TokenHeader;
