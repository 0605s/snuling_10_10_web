import BannerTemplate from 'components/template/BannerTemplate';
import ExperimentBody from 'components/experiment/ExperimentBody';
import PageTemplate from 'components/template/PageTemplate';

const ExperimentMain = () => {
	return (
		<PageTemplate>
			<BannerTemplate title="실험 참여" subTitle="언어학과 실험에 참여해주세요" />
			<ExperimentBody />
		</PageTemplate>
	);
};

export default ExperimentMain;
