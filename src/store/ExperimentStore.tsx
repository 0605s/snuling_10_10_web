import { GetRequest, PatchRequest, PostRequest } from 'lib/api/requests';
import { observable } from 'mobx';
import { ExperimentDetailType, ExperimentType, StatusType } from 'types/experiment';

const ExperimentStore = observable({
	experimentList: [] as ExperimentType[],
	myExperimentList: [] as ExperimentType[],
	experimentDetail: {} as ExperimentDetailType | undefined,
	setExperimentList(experimentList: ExperimentType[]) {
		this.experimentList = experimentList;
	},
	setMyExperimentList(experimentList: ExperimentType[]) {
		this.myExperimentList = experimentList;
	},
	setExperimentDetail(experiment: ExperimentDetailType | undefined) {
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
			const response = await GetRequest<ExperimentDetailType>(`experiments/${id}/`);
			this.setExperimentDetail(response.data);
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

	async patchExperimentDetail(id: number, action: 'join' | 'unjoin', schedule?: string) {
		let success = false;
		let code = '';
		try {
			const response = await PatchRequest(`experiments/${id}/`, {
				action,
				schedule,
			});
			code = response.data.code;
			success = true;
		} catch (e: any) {
			console.error('========= patchExperimentDetail Error =========');
			console.error(e);
		}
		return { success, code };
	},

	async postExperimentSubmit(id: number) {
		let success = false;
		try {
			const response = await PostRequest(`experiments/${id}/submit/`);
			if (response) success = true;
		} catch (e) {
			console.log('========= postExperimentSubmit Error =========');
			console.log(e);
		}
		return success;
	},
});

export default ExperimentStore;
