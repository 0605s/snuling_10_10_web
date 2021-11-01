export type UserType = {
	username: string;
	profile: {
		id: number;
		nickname: string;
		favor: 'OFF' | 'ON' | 'ALL';
		subscribe: boolean;
		lingual: string;
		user: number;
	};
};
