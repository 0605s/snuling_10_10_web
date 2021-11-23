import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
	dateList: string[];
	selectedDate: Date | null;
	setSelectedDate: (date: Date | null) => void;
}

const ExperimentCalender = ({ dateList, selectedDate, setSelectedDate }: Props) => {
	const YYYYMMDDtoDate = (date: string) => {
		let year = date.substring(0, 4);
		let month = date.substring(4, 6);
		let day = date.substring(6, 8);
		return new Date(Number(year), Number(month) - 1, Number(day));
	};

	return (
		<DatePicker
			dateFormat="yyyy/MM/dd"
			selectsStart
			includeDates={dateList.map((e) => {
				return YYYYMMDDtoDate(e);
			})}
			selected={selectedDate}
			onSelect={(date) => setSelectedDate(date)}
			onChange={() => console.log('')}
			inline
		/>
	);
};

export default ExperimentCalender;
