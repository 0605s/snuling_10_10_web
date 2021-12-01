import PageTemplate from 'components/template/PageTemplate';
import { useParams } from 'react-router';

interface Props {
	postType: 'seminar' | 'colloquium' | 'schedule';
}

const PostDetail = ({ postType }: Props) => {
	const { postId } = useParams<{ postId: string }>();
	return <PageTemplate title={`${postType} ${postId}`} />;
};

export default PostDetail;
