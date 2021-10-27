import { observable } from 'mobx';

const LoadingStore = observable({
	loading: true as boolean,
	setLoading(loading: boolean) {
		this.loading = loading;
	},
});

export default LoadingStore;
