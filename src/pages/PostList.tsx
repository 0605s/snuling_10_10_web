import { CircularProgress } from '@mui/material';
import PostListBody from 'components/post/PostListBody';
import PageTemplate from 'components/template/PageTemplate';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import useStore from 'store/Index';

interface Props {
	postType: 'seminar' | 'colloquium' | 'news';
}

const PostList = observer(({ postType }: Props) => {
	const { PostStore, LoadingStore } = useStore();

	const getInit = async () => {
		LoadingStore.setLoading(true);
		const res = await PostStore.getPostList(postType);
		if (res) LoadingStore.setLoading(false);
	};

	useEffect(() => {
		getInit();
	}, [postType]);

	return (
		<PageTemplate title={postType}>
			{/* {LoadingStore.loading ? <CircularProgress /> : <PostListBody postType={postType} />} */}
			<PostListBody postType={postType} />
		</PageTemplate>
	);
});

export default PostList;
