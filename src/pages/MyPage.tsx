import PageTemplate from 'components/template/PageTemplate';
import { Title } from 'lib/constant/Components';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import useStore from 'store/Index';
import { Button } from '@mui/material';
import MyPageBoxTemplate from 'components/template/MyPageBoxTemplate';

const MyPage = observer(() => {
	const { UserStore, ToastStore } = useStore();
	const history = useHistory();
	const { t } = useTranslation();

	const onClickLogout = async () => {
		const result = await UserStore.logout();
		if (result) {
			history.push('/');
			ToastStore.setMessage('success', '로그아웃 되었습니다');
		}
	};

	return (
		<PageTemplate>
			<Title>{t('My Info')}</Title>
			<Button variant="contained" onClick={onClickLogout}>
				{t('logout')}
			</Button>
			<MyPageBoxTemplate title="Account" />
			<MyPageBoxTemplate title="Lingual Settings" />
			<MyPageBoxTemplate title="Email Settings" />
		</PageTemplate>
	);
});

export default MyPage;
