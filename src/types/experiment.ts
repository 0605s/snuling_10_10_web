export type ExperimentType = {
	id: number;
	title: string;
	exp_type: 'ON' | 'OFF';
	status: StatusType;
	link: string;
	lingual: string;
	is_full: boolean;
	reward_type: 'CASH' | 'ELSE';
	reward_price: number;
	reward: string;
	location: string;
	content?: string;
	count_participants: number;
	max_participants: number;
	is_joined: boolean;
};

export type StatusType = 'U' | 'P' | 'C';

export type FilterType = {
	name: string;
	value: any;
};
