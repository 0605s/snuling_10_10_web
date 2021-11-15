import { ExperimentType } from 'types/experiment';
import styled from 'styled-components';
import WarningIcon from '@mui/icons-material/Warning';
import { SubContent } from 'lib/constant/Components';
import { useTranslation } from 'react-i18next';
import { SNULIGHTYELLOW } from 'lib/constant';

const WarningContainer = styled.div`
	width: 70%;
	padding: 10px;
	border-radius: 10px;
	background-color: ${SNULIGHTYELLOW};
	margin: 10px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const RowContainer = styled(SubContent)`
	margin: 5px 0px;
	display: flex;
	align-items: center;
`;

interface Props {
	experiment: ExperimentType;
}

const ExperimentDetailWarning = ({ experiment }: Props) => {
	const { t } = useTranslation();
	return (
		<WarningContainer>
			<RowContainer>
				<WarningIcon fontSize="small" />
				주의사항
			</RowContainer>
			<RowContainer>
				{experiment.exp_type === 'ON'
					? '본 실험은 온라인으로 진행됩니다.'
					: `본 실험은 ${experiment.location}에서 오프라인으로 진행됩니다.`}
			</RowContainer>
			<RowContainer>
				본 실험에 참여해 주시면{' '}
				{experiment.reward_type === 'CASH'
					? `${experiment.reward_price}원을 현금으로 지급해 드립니다.`
					: `${experiment.reward}를 드립니다.`}
			</RowContainer>
		</WarningContainer>
	);
};

export default ExperimentDetailWarning;
