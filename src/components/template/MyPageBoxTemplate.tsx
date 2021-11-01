import { SNUBLUE } from 'lib/constant';
import { SubTitle } from 'lib/constant/Components';
import { ReactNode } from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
	width: 60%;
	height: 100px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	margin: 10px 0px;
`;

const TitleContainer = styled(SubTitle)`
	padding: 10px;
	background-color: ${SNUBLUE};
	color: white;
`;

interface Props {
	title: string;
	children?: ReactNode;
}

const MyPageBoxTemplate = ({ title, children }: Props) => {
	return (
		<BoxContainer>
			<TitleContainer>{title}</TitleContainer>
			{children}
		</BoxContainer>
	);
};

export default MyPageBoxTemplate;
