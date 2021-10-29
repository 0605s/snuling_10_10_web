import { ExperimentType } from 'types/experiment';
import styled from 'styled-components';
import { Content } from 'lib/constant/Components';
import { useHistory } from 'react-router';
import { useCallback } from 'react';

const BoxContainer = styled.div`
	width: 100%;
	height: 350px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	:hover {
		background-color: whitesmoke;
		cursor: pointer;
	}
`;

interface Props {
	item: ExperimentType;
}

const ExperimentBox = ({ item }: Props) => {
	const history = useHistory();

	const onClickBox = useCallback(() => {
		history.push(`/experiment/${item.id}`);
	}, []);

	return (
		<BoxContainer onClick={onClickBox}>
			<Content>[{item.title}]</Content>
			<div>{item.exp_type === 'ON' ? 'Online' : 'Offline'}</div>
			<div>{item.status}</div>
			<div>Languages: {item.lingual} </div>
			<div>{item.is_full ? '모집 완료' : '모집중'}</div>
			<div>{item.reward_price}</div>
		</BoxContainer>
	);
};

export default ExperimentBox;
