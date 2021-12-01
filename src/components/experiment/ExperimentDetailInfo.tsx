import styled from 'styled-components';
import { SubContent } from 'lib/constant/Components';
import { ExperimentDetailType } from 'types/experiment';
import { useTranslation } from 'react-i18next';
import { SNUBLUE } from 'lib/constant';

const InfoContainer = styled.div`
	width: 60%;
	border-radius: 10px;
	border: 0.5px solid #b5b5b5;
	background-color: white;
	margin: 30px 0px;
	padding: 10px 20px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin: 5px 0px;
`;

const Title = styled(SubContent)`
	width: 30%;
	padding-right: 20px;
	text-align: right;
	color: grey;
`;

const Item = styled(SubContent)`
	margin-left: 20px;
	text-align: left;
	color: ${SNUBLUE};
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
				<Item>
					{experiment.lingual
						? experiment.lingual
								.split(',')
								.map((item) => t(item))
								.join(', ')
						: '없음'}
				</Item>
			</Row>
			<Row>
				<Title>실험 진행 방식</Title>
				<Item>{experiment.exp_type === 'ON' ? 'Online' : 'Offline'}</Item>
			</Row>
			{experiment.exp_type === 'OFF' && (
				<Row>
					<Title>실험 장소</Title>
					<Item>{experiment.location}</Item>
				</Row>
			)}
			<Row>
				<Title>실험 참여 보상</Title>
				<Item>
					{experiment.reward_type === 'CASH'
						? `${experiment.reward_price}원`
						: experiment.reward}
				</Item>
			</Row>
			<Row>
				<Title>현재 모집 인원</Title>
				<Item>
					{experiment.count_participants}명 / {experiment.max_participants}명
				</Item>
			</Row>
			{experiment.exp_type === 'OFF' && (
				<Row>
					<Title>실험 시간</Title>
					<Item>{experiment.duration}분</Item>
				</Row>
			)}
			{experiment.exp_type === 'ON' && experiment.is_joined && (
				<>
					<Row>
						<Title>실험 진행 링크</Title>
						<Item onClick={() => window.open(experiment.link, '_blank')}>
							{experiment.link}
						</Item>
					</Row>
					<Row>
						<Title>실험 확인 코드</Title>
						<Item>{experiment.code}</Item>
					</Row>
				</>
			)}
		</InfoContainer>
	);
};

export default ExperimentDetailInfo;
