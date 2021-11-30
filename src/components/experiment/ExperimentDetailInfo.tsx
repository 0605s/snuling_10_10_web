import styled from 'styled-components';
import { SubContent } from 'lib/constant/Components';
import { ExperimentDetailType } from 'types/experiment';
import { useTranslation } from 'react-i18next';

const InfoContainer = styled.div`
	border-radius: 10px;
	border: 0.5px solid gray;
	width: 90%;
	margin: 30px 0px;
	padding: 10px 20px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const Title = styled(SubContent)`
	width: 30%;
`;

interface Props {
	experiment: ExperimentDetailType;
}

const ExperimentDetailInfo = ({ experiment }: Props) => {
	const { t } = useTranslation();

	if (!experiment) return null;
	return (
		<InfoContainer>
			<Row>
				<Title>참여 대상 모국어</Title>
				<Title>
					{experiment.lingual
						? experiment.lingual
								.split(',')
								.map((item) => t(item))
								.join(', ')
						: '없음'}
				</Title>
			</Row>
			<Row>
				<Title>실험 진행 방식</Title>
				<Title>{experiment.exp_type === 'ON' ? 'Online' : 'Offline'}</Title>
			</Row>
			{experiment.exp_type === 'OFF' && (
				<Row>
					<Title>실험 장소</Title>
					<Title>{experiment.location}</Title>
				</Row>
			)}
			<Row>
				<Title>실험 참여 보상</Title>
				<Title>
					{experiment.reward_type === 'CASH'
						? `${experiment.reward_price}원`
						: experiment.reward}
				</Title>
			</Row>
			<Row>
				<Title>현재 모집 인원</Title>
				<Title>
					{experiment.count_participants}명 / {experiment.max_participants}명
				</Title>
			</Row>
			{experiment.exp_type === 'OFF' && (
				<Row>
					<Title>실험 시간</Title>
					<Title>{experiment.duration}분</Title>
				</Row>
			)}
		</InfoContainer>
	);
};

export default ExperimentDetailInfo;
