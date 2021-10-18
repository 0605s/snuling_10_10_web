import { UserType } from './user';

export type ExperimentType = {
	status: 'Unpublished' | 'In Progress' | 'Closed';
	type: ParticipationType;
	link?: string;
	content?: string;
	rewardType: 'Cash' | 'Else';
	rewardPrice?: number;
	location: string;
	participantList: UserType[];
};

export type ParticipationType = 'Online' | 'Offline';
