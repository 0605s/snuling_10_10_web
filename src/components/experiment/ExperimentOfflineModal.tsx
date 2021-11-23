import { Stack, Divider, FormControlLabel, Radio } from '@mui/material';
import { ExperimentType } from 'types/experiment';
import styled from 'styled-components';
import { SubContent } from 'lib/constant/Components';
import { useState } from 'react';
import ExperimentCalender from './ExperimentCalender';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InnerContainer = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	flex-direction: row;
`;

const Column = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DateStack = styled(Stack)``;

interface Props {
	experiment: ExperimentType;
}

const dateList = ['202111220930', '202111230930', '202111231000'];

const ExperimentOfflineModal = ({ experiment }: Props) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	return (
		<Container>
			<SubContent>참여 가능한 일정을 선택해주세요</SubContent>
			<InnerContainer>
				<Column>
					<ExperimentCalender
						selectedDate={selectedDate}
						dateList={dateList}
						setSelectedDate={setSelectedDate}
					/>
				</Column>
				<Divider orientation="vertical" flexItem />
				<Column>
					<DateStack direction="column">
						{dateList
							.filter(
								(e) =>
									e.slice(0, 8) ===
									selectedDate?.toISOString().slice(0, 10).replace(/-/g, ''),
							)
							.map((e) => {
								// return <div key={e}>e</div>;
								return (
									<FormControlLabel
										key={e}
										value={e}
										control={<Radio />}
										label={`${e.slice(8, 10)}시 ${e.slice(10, 12)}분`}
									/>
								);
							})}
					</DateStack>
				</Column>
			</InnerContainer>
		</Container>
	);
};

export default ExperimentOfflineModal;
