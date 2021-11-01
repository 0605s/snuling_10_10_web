// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { langEn } from './langEn';
import { langKo } from './langKo';

const resources = {
	en: {
		translation: langEn,
	},
	ko: {
		translation: langKo,
	},
};

i18n.use(initReactI18next).init({
	resources,
	// 초기 설정 언어
	lng: 'ko',
	fallbackLng: {
		en: ['en'],
		default: ['ko'],
	},
	debug: true,
	defaultNS: 'translation',
	ns: 'translation',
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
});

export default i18n;
