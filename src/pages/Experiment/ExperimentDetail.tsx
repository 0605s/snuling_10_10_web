import Button from '@mui/material/Button';
import { RowContainer } from 'lib/constant/Components';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import useStore from 'store/Index';

const ExperimentDetail = observer(() => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const { ExperimentStore } = useStore();

	useEffect(() => {
		ExperimentStore.getExperimentDetail(parseInt(id, 10));
	}, []);

	if (!ExperimentStore.experimentDetail) return null;

	return (
		<RowContainer>
			<div>{ExperimentStore.experimentDetail.title}</div>
			<Button
				disabled={ExperimentStore.experimentDetail.is_full}
				onClick={() => console.log('참여')}
			>
				실험 참여하기
			</Button>
			<Button onClick={() => history.goBack()}>뒤로가기</Button>
		</RowContainer>
	);
});

export default ExperimentDetail;
