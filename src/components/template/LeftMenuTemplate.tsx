import styled from 'styled-components';

const LeftMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100px;
	height: 300px;
	border: 1px solid black;
`;

interface Props {
	menu: { title: string; domain: string }[];
}

const LeftMenuTemplate = ({ menu }: Props) => {
	return <LeftMenuContainer />;
};

export default LeftMenuTemplate;
