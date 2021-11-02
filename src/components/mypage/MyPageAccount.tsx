import MyPageBoxTemplate from 'components/template/MyPageBoxTemplate';
import useStore from 'store/Index';

const MyPageAccount = () => {
	const { UserStore } = useStore();

	if (UserStore.user === null) return null;
	return (
		<MyPageBoxTemplate title="Account Settings">
			<div>Email: {UserStore.user?.username}</div>
		</MyPageBoxTemplate>
	);
};

export default MyPageAccount;
