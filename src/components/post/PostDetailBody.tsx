import useStore from 'store/Index';
import { observer } from 'mobx-react';

const PostDetailBody = observer(() => {
	const { PostStore } = useStore();
	const post = PostStore.currentPost;

	if (!post) return null;
	return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
});

export default PostDetailBody;
