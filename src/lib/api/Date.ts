export const yyyymmddToDate = (date: string) => {
	let year = date.substring(0, 4);
	let month = date.substring(5, 7);
	let day = date.substring(8, 10);
	return new Date(Number(year), Number(month) - 1, Number(day));
};

export const dateToYyyymmdd = (date: Date) => {
	let sYear = date.getFullYear().toString();
	let sMonth =
		date.getMonth() + 1 > 9
			? (date.getMonth() + 1).toString()
			: `0${(date.getMonth() + 1).toString()}`;
	let sDate = date.getDate() > 9 ? date.getDate().toString() : `0${date.getDate().toString()}`;
	return `${sYear}-${sMonth}-${sDate}`;
};
