import { Divider, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ExperimentDetailType } from 'types/experiment';
import styled from 'styled-components';
import { SubContent } from 'lib/constant/Components';
import { useCallback, useState } from 'react';
import ModalTemplate from 'components/template/ModalTemplate';
import useStore from 'store/Index';
import { useHistory } from 'react-router';
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
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const Column = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

interface Props {
	id: string;
	isModalVisible: boolean;
	experiment: ExperimentDetailType;
	setIsModalVisible: (visible: boolean) => void;
}

const ExperimentOfflineModal = ({ id, isModalVisible, experiment, setIsModalVisible }: Props) => {
	const history = useHistory();
	const { ExperimentStore, ToastStore } = useStore();
	const [selectedDate, setSelectedDate] = useState<string>(
		experiment.schedule_available.length > 0
			? experiment.schedule_available[0].slice(0, 10)
			: '',
	);
	const [selectedTime, setSelectedTime] = useState<string | null>(null);

	const onClickOK = async () => {
		if (!selectedTime) ToastStore.setMessage('error', '실험 참여 희망 시간을 선택해주세요.');
		else {
			const res = await ExperimentStore.patchExperimentDetail(
				parseInt(id, 10),
				'join',
				selectedTime,
			);
			if (res.success) {
				ToastStore.setMessage('success', '실험 예약이 완료되었습니다.');
				setIsModalVisible(false);
				history.push('/mypage');
			} else {
				ToastStore.setMessage('error', '서버에 오류가 있습니다. 관리자에게 문의하세요.');
			}
		}
	};

	return (
		<ModalTemplate
			isOpen={isModalVisible}
			onClickClose={() => setIsModalVisible(false)}
			onClickOK={onClickOK}
		>
			<Container>
				<SubContent>참여 가능한 일정을 선택해주세요</SubContent>
				<InnerContainer>
					<Column>
						<ExperimentCalender
							selectedDate={selectedDate}
							schedule={experiment?.schedule}
							setSelectedDate={setSelectedDate}
						/>
					</Column>
					<Divider orientation="vertical" flexItem />
					<Column>
						<SubContent>
							{selectedDate?.slice(0, 4)}년 {selectedDate?.slice(5, 7)}월{' '}
							{selectedDate?.slice(8, 10)}일
						</SubContent>
						<RadioGroup
							value={selectedTime}
							onChange={(e) => setSelectedTime(e.target.value)}
						>
							{experiment?.schedule
								.filter((e) => e.slice(0, 10) === selectedDate)
								.map((e) => {
									return (
										<FormControlLabel
											key={e}
											value={e}
											control={<Radio />}
											label={`${e.slice(11, 13)}시 ${e.slice(14, 16)}분 시작`}
											disabled={experiment?.schedule_reserved.includes(e)}
										/>
									);
								})}
						</RadioGroup>
					</Column>
				</InnerContainer>
			</Container>
		</ModalTemplate>
	);
};

export default ExperimentOfflineModal;
