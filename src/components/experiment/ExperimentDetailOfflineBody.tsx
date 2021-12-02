import { useState } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { Title, Content } from 'lib/constant/Components';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import useStore from 'store/Index';
import styled from 'styled-components';
import ExperimentOfflineModal from './ExperimentOfflineModal';
import ExperimentDetailInfo from './ExperimentDetailInfo';

const ContentContainer = styled.div`
	width: 90%;
`;

const ExperimentDetailOfflineBody = observer(() => {
	const { id } = useParams<{ id: string }>();
	const { ExperimentStore, UserStore, ToastStore } = useStore();
	const experiment = ExperimentStore.experimentDetail;
	const [isOfflineModalVisible, setIsOfflineModalVisible] = useState<boolean>(false);

	const onClickAssign = async () => {
		if (UserStore.user === null)
			ToastStore.setMessage('info', '실험에 참여하시려면 먼저 로그인을 해주세요');
		else {
			setIsOfflineModalVisible(true);
		}
	};

	if (!experiment) return null;
	return (
		<>
			<Title>{experiment.title}</Title>
			<ExperimentDetailInfo experiment={experiment} />
			<ContentContainer
				dangerouslySetInnerHTML={{
					__html: `${experiment.content}`,
				}}
			/>
			{experiment.schedule && (
				<ExperimentOfflineModal
					experiment={experiment}
					id={id}
					isModalVisible={isOfflineModalVisible}
					setIsModalVisible={setIsOfflineModalVisible}
				/>
			)}
			<Button
				disabled={experiment.is_full || experiment.is_joined}
				onClick={onClickAssign}
				endIcon={<CreateIcon />}
				variant="contained"
			>
				{experiment.is_joined
					? '예약 완료'
					: experiment.is_full
					? '모집 마감'
					: '실험 참여하기'}
			</Button>
		</>
	);
});

export default ExperimentDetailOfflineBody;
