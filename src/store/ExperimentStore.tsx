import { GetRequest, PutRequest } from 'lib/api/requests';
import { observable } from 'mobx';
import { ExperimentType, StatusType } from 'types/experiment';

const ExperimentStore = observable({
	experimentList: [] as ExperimentType[],
	myExperimentList: [] as ExperimentType[],
	experimentDetail: {} as ExperimentType | undefined,
	setExperimentList(experimentList: ExperimentType[]) {
		this.experimentList = experimentList;
	},
	setMyExperimentList(experimentList: ExperimentType[]) {
		this.myExperimentList = experimentList;
	},
	setExperimentDetail(experiment: ExperimentType | undefined) {
		this.experimentDetail = experiment;
	},

	async getExperimentList(
		lingual?: string,
		status?: StatusType,
		available?: boolean,
		expType?: 'ON' | 'OFF',
	) {
		let success = false;
		try {
			this.setExperimentList([]);
			const response = await GetRequest('experiments/', {
				lingual: lingual && lingual.length > 0 ? lingual : undefined,
				status,
				is_full: available ? 'no' : undefined,
				exp_type: expType,
			});
			this.setExperimentList(response.data);
			// console.error('========= getExperimentList Success =========');
			success = true;
		} catch (e) {
			console.error('========= getExperimentList Error =========');
			console.error(e);
		}
		return success;
	},

	async getExperimentDetail(id: number) {
		let success = false;
		try {
			this.setExperimentDetail(undefined);
			const response = await GetRequest(`experiments/${id}/`);
			this.setExperimentDetail(response.data);
			// console.error('========= getExperimentDetail Success =========');
			success = true;
		} catch (e) {
			console.error('========= getExperimentDetail Error =========');
			console.error(e);
		}
		return success;
	},

	async getMyExperimentList() {
		let success = false;
		try {
			const response = await GetRequest(`experiments/my/`);
			this.setMyExperimentList(response.data);
			success = true;
		} catch (e) {
			console.log('========= getMyExperimentDetail Error =========');
			console.log(e);
		}
		return success;
	},

	async putExperimentDetail(id: number) {
		let success = false;
		try {
			const response = await PutRequest(`experiments/${id}/`);
			if (response.data === 200) success = true;
		} catch (e) {
			console.error('========= putExperimentDetail Error =========');
			console.error(e);
		}
		return success;
	},
});

export default ExperimentStore;
