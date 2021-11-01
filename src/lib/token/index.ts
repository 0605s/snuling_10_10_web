// eslint-disable-next-line camelcase
import jwt_decode, { JwtPayload } from 'jwt-decode';
import moment, { now } from 'moment';

const isValidToken = (token: string) => {
	const expireUnixTime = getExpiredFromJwt(token);
	if (moment.unix(expireUnixTime).diff(now()) >= 60 * 60 * 24) return true;
	return false;
};

const getExpiredFromJwt = (token: string) => {
	try {
		if (token === '') return now();
		const expireTime = (jwt_decode(token) as JwtPayload).exp;
		if (!expireTime) return now();
		return expireTime;
	} catch (e) {
		console.error(e);
		return now();
	}
};

export default isValidToken;
