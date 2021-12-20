import { useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory, useParams } from 'react-router-dom';
import { Title } from 'lib/constant/Components';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import useStore from 'store/Index';
import styled from 'styled-components';
import ExperimentOfflineModal from './ExperimentOfflineModal';
import ExperimentDetailInfo from './ExperimentDetailInfo';

const ContentContainer = styled.div`
	width: 90%;
`;

const ButtonList = styled.div`
	display: flex;
	flex-direction: row;
`;

const ExperimentDetailOfflineBody = observer(() => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const { ExperimentStore, UserStore, ToastStore } = useStore();
	const experiment = ExperimentStore.experimentDetail;
	const [isOfflineModalVisible, setIsOfflineModalVisible] = useState<boolean>(false);

	const onClickAssign = async () => {
		if (UserStore.user === null) {
			ToastStore.setMessage('info', '실험에 참여하시려면 먼저 로그인을 해주세요.');
			history.push('/mypage');
		} else {
			setIsOfflineModalVisible(true);
		}
	};

	const onClickCancel = async () => {
		const res = await ExperimentStore.patchExperimentDetail(parseInt(id, 10), 'unjoin');
		if (res) {
			ToastStore.setMessage('success', '실험 예약이 성공적으로 취소되었습니다.');
		} else {
			ToastStore.setMessage('error', '서버에 문제가 있습니다. 잠시 뒤에 다시 시도해주세요.');
		}
	};

	if (!experiment) return null;
	if (experiment.exp_type === 'ON') return null;
	return (
		<>
			<Title>{experiment.title}</Title>
			<ExperimentDetailInfo experiment={experiment} />
			<ContentContainer
				dangerouslySetInnerHTML={{
					__html: `${experiment.content}`,
				}}
			/>
			{experiment.schedule_available && (
				<ExperimentOfflineModal
					experiment={experiment}
					id={id}
					isModalVisible={isOfflineModalVisible}
					setIsModalVisible={setIsOfflineModalVisible}
				/>
			)}
			{experiment.is_joined ? (
				<ButtonList>
					{/* <Button
						onClick={onClickAssign}
						endIcon={<CreateIcon />}
						variant="contained"
						sx={{ mr: 5 }}
					>
						예약 변경
					</Button> */}
					<Button
						onClick={onClickCancel}
						endIcon={<CreateIcon />}
						variant="contained"
						color="inherit"
					>
						예약 취소
					</Button>
				</ButtonList>
			) : (
				<Button
					disabled={experiment.is_full || experiment.status !== 'P'}
					onClick={onClickAssign}
					endIcon={<CreateIcon />}
					variant="contained"
				>
					{experiment.is_full
						? '모집 마감'
						: experiment.status !== 'P'
						? '예약 불가'
						: '실험 예약하기'}
				</Button>
			)}

			{experiment.reservation}
		</>
	);
});

export default ExperimentDetailOfflineBody;
