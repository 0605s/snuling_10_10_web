import { FilterType } from 'types/experiment';

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

export const statusFilterList: { name: string; value: 'I' | 'U' | 'C' }[] = [
	{
		name: 'In Progress',
		value: 'I',
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

export const isFullFilterList: { name: string; value: boolean }[] = [
	{
		name: 'Recruiting',
		value: false,
	},
	{
		name: 'Recruitment Complete',
		value: true,
	},
];

export const lingualFilterList: { name: string; value: string }[] = languageList.map((lang) => {
	return {
		name: lang,
		value: lang,
	};
});
