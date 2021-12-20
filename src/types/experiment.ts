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
	count_participants: number;
	max_participants: number;
	is_joined: boolean;
};

export type ExperimentDetailType = {
	id: number;
	is_joined: boolean;
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
	content: string;
	count_participants: number;
	max_participants: number;
	schedule: string[];
	schedule_available: string[];
	schedule_reserved: string[];
	duration?: number;
	code?: string;
	reservation: string;
};

export type StatusType = 'U' | 'P' | 'C';

export type FilterType = {
	name: string;
	value: any;
};
