import { IconButton } from '@mui/material';
import { SNUGRAY } from 'lib/constant';
import { SubTitle } from 'lib/constant/Components';
import { ReactNode } from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const BoxContainer = styled.div`
	width: 60%;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	margin: 10px 0px;
`;

const TitleContainer = styled(SubTitle)`
	display: flex;
	padding: 10px;
	background-color: ${SNUGRAY};
	color: white;
	justify-content: space-between;
`;

const ChildrenContainer = styled.div`
	min-height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

interface Props {
	title: string;
	children?: ReactNode;
	editMode?: boolean;
	onPressEditButton?: () => void;
	onPressSaveButton?: () => void;
}

const MyPageBoxTemplate = ({
	title,
	children,
	editMode,
	onPressEditButton,
	onPressSaveButton,
}: Props) => {
	return (
		<BoxContainer>
			<TitleContainer>
				{title}
				{editMode ? (
					<IconButton onClick={onPressSaveButton}>
						<SaveIcon />
					</IconButton>
				) : (
					<IconButton onClick={onPressEditButton}>
						<EditIcon />
					</IconButton>
				)}
			</TitleContainer>
			<ChildrenContainer>{children}</ChildrenContainer>
		</BoxContainer>
	);
};

export default MyPageBoxTemplate;
