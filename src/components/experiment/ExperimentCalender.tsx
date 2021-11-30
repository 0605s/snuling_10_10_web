import { yyyymmddToDate, dateToYyyymmdd } from 'lib/api/Date';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';

interface Props {
	schedule: string[];
	selectedDate: string;
	setSelectedDate: (date: string) => void;
}

const ExperimentCalender = ({ schedule, selectedDate, setSelectedDate }: Props) => {
	const { i18n } = useTranslation();
	// registerLocale('ko', ko);

	return (
		<DatePicker
			includeDates={schedule.map((e) => {
				return yyyymmddToDate(e);
			})}
			selected={yyyymmddToDate(selectedDate)}
			onSelect={(date) => {
				setSelectedDate(dateToYyyymmdd(date));
			}}
			onChange={() => console.log('')}
			locale={i18n.language === 'ko' ? ko : 'en'}
			inline
		/>
	);
};

export default ExperimentCalender;
