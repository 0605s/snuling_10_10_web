import BannerTemplate from 'components/template/BannerTemplate';
import ExperimentBody from 'components/template/experiment/ExperimentBody';

const ExperimentMain = () => {
	return (
		<>
			<BannerTemplate title="실험 참여" subTitle="언어학과 실험에 참여해주세요" />
			<ExperimentBody />
		</>
	);
};

export default ExperimentMain;
