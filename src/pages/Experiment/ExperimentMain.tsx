import ExperimentBody from 'components/experiment/ExperimentBody';
import PageTemplate from 'components/template/PageTemplate';

const ExperimentMain = () => {
	return (
		<PageTemplate title="Experiments" subTitle="언어학 실험에 직접 참여해주세요">
			<ExperimentBody />
		</PageTemplate>
	);
};

export default ExperimentMain;
