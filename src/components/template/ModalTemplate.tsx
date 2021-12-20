import { Modal } from '@mui/material';
import { SNUBLUE } from 'lib/constant';
import { Children, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	outline: 0;
	width: 50vw;
	color: black;
	@media screen and (max-width: 800px) {
		width: 80vw;
	}
`;

const ChildrenContainer = styled.div`
	width: 100%;
	padding: 20px;
	border-radius: 10px 10px 0px 0px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const OKButton = styled.div`
	border-radius: 0px 0px 10px 10px;
	width: 100%;
	height: 40px;
	background-color: ${SNUBLUE};
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	:hover {
		background-color: ${SNUBLUE}, 0.9;
		cursor: pointer;
	}
`;

interface Props {
	children: ReactNode;
	isOpen: boolean;
	onClickClose: () => void;
	onClickOK?: () => void;
}

const ModalTemplate = ({ children, isOpen, onClickClose, onClickOK }: Props) => {
	const { t } = useTranslation();

	return (
		<Modal open={isOpen} onClose={onClickClose}>
			<ModalContainer>
				<ChildrenContainer>{children}</ChildrenContainer>
				<OKButton onClick={onClickOK}>{t('Confirm')}</OKButton>
			</ModalContainer>
		</Modal>
	);
};

export default ModalTemplate;
