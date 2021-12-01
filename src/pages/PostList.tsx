import PageTemplate from 'components/template/PageTemplate';

interface Props {
	postType: 'seminar' | 'colloquium' | 'schedule';
}

const PostList = ({ postType }: Props) => {
	return <PageTemplate title={postType} />;
};

export default PostList;
