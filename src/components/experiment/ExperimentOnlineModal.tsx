import { SubContent, Content } from 'lib/constant/Components';
import styled from 'styled-components';
import { ExperimentDetailType } from 'types/experiment';
import ModalTemplate from 'components/template/ModalTemplate';

interface Props {
	isModalVisible: boolean;
	setIsModalVisible: (visible: boolean) => void;
	experiment: ExperimentDetailType;
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

const ExperimentOnlineModal = ({ isModalVisible, setIsModalVisible, experiment, code }: Props) => {
	return (
		<ModalTemplate
			isOpen={isModalVisible}
			onClickClose={() => setIsModalVisible(false)}
			onClickOK={() => setIsModalVisible(false)}
		>
			<SubContent>실험에 참여되었습니다. 아래 링크를 클릭해주세요.</SubContent>
			<BoldLabel onClick={() => window.open(experiment.link, '_blank')}>
				{experiment.link}
			</BoldLabel>
			<SubContent>
				실험이 완료되면 confirmation code 입력란에 아래 코드를 입력하세요.
			</SubContent>
			<BoldLabel>{code}</BoldLabel>
		</ModalTemplate>
	);
};

export default ExperimentOnlineModal;
