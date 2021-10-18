import { ExperimentType } from './experiment';

export type ScheduleType = {
	startTime: Date;
	endTime: Date;
	experiment: ExperimentType;
};
