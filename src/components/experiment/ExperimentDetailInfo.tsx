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
	@media screen and (max-width: 800px) {
		width: 80%;
	}
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
	@media screen and (max-width: 800px) {
		width: 40%;
	}
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
				<Title>{t('target language')}</Title>
				<Item>
					{experiment.lingual
						? experiment.lingual
								.split(',')
								.map((item) => t(item))
								.join(', ')
						: t('none')}
				</Item>
			</Row>
			<Row>
				<Title>{t('experiment type')}</Title>
				<Item>{t(experiment.exp_type === 'ON' ? 'Online' : 'Offline')}</Item>
			</Row>
			{experiment.exp_type === 'OFF' && (
				<Row>
					<Title>{t('location')}</Title>
					<Item>{experiment.location}</Item>
				</Row>
			)}
			<Row>
				<Title>{t('reward')}</Title>
				<Item>
					{experiment.reward_type === 'CASH'
						? `₩${experiment.reward_price}`
						: experiment.reward}
				</Item>
			</Row>
			<Row>
				<Title>{t('participants')}</Title>
				<Item>
					{experiment.count_participants}명 / {experiment.max_participants}명
				</Item>
			</Row>
			{experiment.exp_type === 'OFF' && (
				<Row>
					<Title>{t('duration')}</Title>
					<Item>
						{experiment.duration}
						{t('min')}
					</Item>
				</Row>
			)}
			{experiment.exp_type === 'ON' && experiment.is_joined && (
				<>
					<Row>
						<Title>{t('link')}</Title>
						<Item onClick={() => window.open(experiment.link, '_blank')}>
							{experiment.link}
						</Item>
					</Row>
					<Row>
						<Title>{t('code')}</Title>
						<Item>{experiment.code}</Item>
					</Row>
				</>
			)}
		</InfoContainer>
	);
};

export default ExperimentDetailInfo;
