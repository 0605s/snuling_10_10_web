import { GetRequest } from 'lib/api/requests';
import { observable } from 'mobx';
import { PostType } from 'types/post';

const PostStore = observable({
	newsList: [] as PostType[],
	colloquiumList: [] as PostType[],
	seminarList: [] as PostType[],
	currentPost: {} as PostType | undefined,
	setNewsList(newsList: PostType[]) {
		this.newsList = newsList;
	},
	setColloquiumList(colloquiumList: PostType[]) {
		this.colloquiumList = colloquiumList;
	},
	setSeminarList(seminarList: PostType[]) {
		this.seminarList = seminarList;
	},
	setCurrentPost(currentPost: PostType | undefined) {
		this.currentPost = currentPost;
	},

	async getPostList(type: 'seminar' | 'colloquium' | 'news') {
		let success = false;
		try {
			const response = await GetRequest(`posts/`, { post_type: type.toUpperCase() });
			switch (type) {
				case 'news':
					this.setNewsList(response.data);
					break;
				case 'colloquium':
					this.setColloquiumList(response.data);
					break;
				case 'seminar':
					this.setSeminarList(response.data);
					break;
				default:
					break;
			}
			success = true;
		} catch (e) {
			console.error('========= getPostList Error =========');
			console.error(e);
		}
		return success;
	},

	async getCurrentPost(id: number) {
		let success = false;
		try {
			const response = await GetRequest(`posts/${id}/`);
			this.setCurrentPost(response.data);
			success = true;
		} catch (e) {
			console.error('========= getPostList Error =========');
			console.error(e);
		}
		return success;
	},
});

export default PostStore;
