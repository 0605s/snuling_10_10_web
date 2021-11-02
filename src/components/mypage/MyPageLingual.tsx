import MyPageBoxTemplate from 'components/template/MyPageBoxTemplate';
import useStore from 'store/Index';

const MyPageLingual = () => {
	const { UserStore } = useStore();

	if (UserStore.user === null) return null;
	return (
		<MyPageBoxTemplate title="Lingual Settings">
			<div>Languages: {UserStore.user?.profile.lingual}</div>
		</MyPageBoxTemplate>
	);
};

export default MyPageLingual;
