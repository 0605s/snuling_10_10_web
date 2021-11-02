import MyPageBoxTemplate from 'components/template/MyPageBoxTemplate';
import useStore from 'store/Index';

const MyPageEmail = () => {
	const { UserStore } = useStore();

	if (UserStore.user === null) return null;
	return (
		<MyPageBoxTemplate title="Email Settings">
			<div>Email 수신 : {UserStore.user?.profile.subscribe ? '동의 ' : '비동의'}</div>
		</MyPageBoxTemplate>
	);
};

export default MyPageEmail;
