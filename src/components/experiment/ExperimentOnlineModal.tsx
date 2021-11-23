import { SubContent, Content } from 'lib/constant/Components';
import styled from 'styled-components';
import { ExperimentType } from 'types/experiment';

interface Props {
	experiment: ExperimentType;
	code: string;
}
const BoldLabel = styled(Content)`
	margin: 10px 0px;
	font-weight: 500;
	:hover {
		opacity: 0.9;
		cursor: pointer;
	}
`;
const ExperimentOnlineModal = ({ experiment, code }: Props) => {
	return (
		<>
			<SubContent>실험에 참여되었습니다. 아래 링크를 클릭해주세요.</SubContent>
			<BoldLabel onClick={() => window.open(experiment.link, '_blank')}>
				{experiment.link}
			</BoldLabel>
			<SubContent>
				실험이 완료되면 confirmation code 입력란에 아래 코드를 입력하세요.
			</SubContent>
			<BoldLabel>{code}</BoldLabel>
		</>
	);
};

export default ExperimentOnlineModal;
