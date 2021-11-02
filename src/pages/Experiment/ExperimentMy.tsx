import PageTemplate from 'components/template/PageTemplate';
import { useHistory } from 'react-router';
import { ExperimentMenus } from 'lib/menus';
import useStore from 'store/Index';
import { useEffect } from 'react';
import { SubTitle } from 'lib/constant/Components';

const ExperimentMy = () => {
	const { UserStore, ToastStore } = useStore();
	const history = useHistory();

	useEffect(() => {
		if (UserStore.user === null) {
			ToastStore.setMessage('warning', '로그인 후 이용 가능합니다.');
			history.push('/experiment');
		}
	}, []);

	return (
		<PageTemplate title="Experiments" menu={ExperimentMenus}>
			<SubTitle>내가 참여한 실험들</SubTitle>
		</PageTemplate>
	);
};

export default ExperimentMy;
