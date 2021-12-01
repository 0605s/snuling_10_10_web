import { CircularProgress } from '@mui/material';
import PostDetailBody from 'components/post/PostDetailBody';
import PageTemplate from 'components/template/PageTemplate';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useStore from 'store/Index';

interface Props {
	postType: 'seminar' | 'colloquium' | 'schedule';
}

const PostDetail = ({ postType }: Props) => {
	const { postId } = useParams<{ postId: string }>();
	const { PostStore, LoadingStore } = useStore();

	const getInit = async () => {
		LoadingStore.setLoading(true);
		const res = await PostStore.getCurrentPost(parseInt(postId, 10));
		if (res) LoadingStore.setLoading(false);
	};

	useEffect(() => {
		getInit();
	}, []);

	// if (!PostStore.currentPost) return null;
	return (
		<PageTemplate>
			{LoadingStore.loading ? <CircularProgress /> : <PostDetailBody />}
		</PageTemplate>
	);
};

export default PostDetail;
