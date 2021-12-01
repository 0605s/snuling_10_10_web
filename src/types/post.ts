export type PostType = {
	id: number;
	title: string;
	subTitle?: string;
	thumbnail: string;
	content: string;
	pub_date: Date;
	modified_date: Date;
	tags: string;
	author_nickname: string;
	post_type: 'NEWS' | 'COLLOQUIUM' | 'SEMINAR';
};
