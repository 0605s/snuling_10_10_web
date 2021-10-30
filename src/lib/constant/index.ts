import { FilterType, StatusType } from 'types/experiment';

export const API_BASE_URL = 'https://jinh0park.pythonanywhere.com/api/';

export const SNUBLUE = '#0f0f70';
export const SNUGRAY = '#666666';
export const SNUSILVER = '#D2D2D2';

export const languageList: string[] = [
	'korean',
	'english',
	'japanese',
	'chinese',
	'french',
	'spanish',
];

export const statusFilterList: { name: string; value: StatusType }[] = [
	{
		name: 'In Progress',
		value: 'P',
	},
	{
		name: 'Unpublished',
		value: 'U',
	},
	{
		name: 'Closed',
		value: 'C',
	},
];

export const lingualFilterList: { name: string; value: string }[] = languageList.map((lang) => {
	return {
		name: lang,
		value: lang,
	};
});

export const expTypeFilterList: { name: string; value: 'ON' | 'OFF' }[] = [
	{
		name: 'Online',
		value: 'ON',
	},
	{
		name: 'Offline',
		value: 'OFF',
	},
];
