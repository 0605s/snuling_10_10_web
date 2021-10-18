import UserStore from './UserStore';
import TokenStore from './TokenStore';

const useStore = () => {
	return {
		UserStore,
		TokenStore,
	};
};

export default useStore;
