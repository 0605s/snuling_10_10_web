import UserStore from './UserStore';
import TokenStore from './TokenStore';
import ToastStore from './ToastStore';
import ExperimentStore from './ExperimentStore';

const useStore = () => {
	return {
		UserStore,
		TokenStore,
		ToastStore,
		ExperimentStore,
	};
};

export default useStore;
