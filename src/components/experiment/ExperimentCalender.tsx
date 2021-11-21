import DatePicker from 'react-date-picker';
import { Stack, Divider, FormControlLabel, Radio } from '@mui/material';
import { useState } from 'react';
import { ExperimentType } from 'types/experiment';
import styled from 'styled-components';

const InnerContainer = styled(Stack)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const DatePickerContainer = styled.div``;
const DateStack = styled(Stack)``;

interface Props {
	experiment: ExperimentType;
}

const ExperimentCalender = ({ experiment }: Props) => {
	const [value, setValue] = useState<Date>();

	return (
		<>
			<div>참여 가능한 일정을 선택해주세요</div>
			<InnerContainer
				direction="row"
				spacing={2}
				divider={<Divider orientation="vertical" flexItem />}
			>
				<DatePickerContainer>
					<DatePicker onChange={() => console.log('changed')} value={value} isOpen />
				</DatePickerContainer>
				<DateStack direction="column">
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="female" control={<Radio />} label="Female" />
				</DateStack>
			</InnerContainer>
		</>
	);
};

export default ExperimentCalender;
