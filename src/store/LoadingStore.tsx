import { observable } from 'mobx';

const LoadingStore = observable({
	loading: false as boolean,
	setLoading(loading: boolean) {
		this.loading = loading;
	},
});

export default LoadingStore;
