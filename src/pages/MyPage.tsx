import { useEffect } from 'react';
import PageTemplate from 'components/template/PageTemplate';
import { Title } from 'lib/constant/Components';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import useStore from 'store/Index';
import { Button } from '@mui/material';
import MyPageAccount from 'components/mypage/MyPageAccount';
import MyPageLingual from 'components/mypage/MyPageLingual';
import MyPageEmail from 'components/mypage/MyPageEmail';

const MyPage = observer(() => {
	const { UserStore, ToastStore, TokenStore } = useStore();
	const history = useHistory();
	const { t } = useTranslation();

	useEffect(() => {
		if (UserStore.user === null) history.replace('/');
	}, []);

	const onClickLogout = async () => {
		const result = await UserStore.logout();
		if (result) {
			TokenStore.clear();
			history.push('/');
			ToastStore.setMessage('success', '로그아웃 되었습니다');
		}
	};

	const onClickQuit = async () => {
		const result = await UserStore.deleteUser();
		if (result) {
			TokenStore.clear();
			history.push('/');
			ToastStore.setMessage('success', '회원탈퇴 되었습니다');
		}
	};

	return (
		<PageTemplate>
			<Title>{t('My Info')}</Title>
			<Button variant="contained" onClick={onClickLogout}>
				{t('logout')}
			</Button>
			<Button variant="text" onClick={onClickQuit}>
				{t('quit')}
			</Button>
			<MyPageAccount />
			<MyPageLingual />
			<MyPageEmail />
		</PageTemplate>
	);
});

export default MyPage;
