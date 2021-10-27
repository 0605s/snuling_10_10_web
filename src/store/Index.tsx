import UserStore from './UserStore';
import TokenStore from './TokenStore';
import ToastStore from './ToastStore';
import ExperimentStore from './ExperimentStore';
import LoadingStore from './LoadingStore';

const useStore = () => {
	return {
		UserStore,
		TokenStore,
		ToastStore,
		ExperimentStore,
		LoadingStore,
	};
};

export default useStore;
