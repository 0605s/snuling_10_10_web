import UserStore from './UserStore';
import TokenStore from './TokenStore';
import ToastStore from './ToastStore';
import PostStore from './PostStore';
import ExperimentStore from './ExperimentStore';
import LoadingStore from './LoadingStore';

const useStore = () => {
	return {
		UserStore,
		TokenStore,
		ToastStore,
		PostStore,
		ExperimentStore,
		LoadingStore,
	};
};

export default useStore;
