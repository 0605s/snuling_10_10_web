import useStore from 'store/Index';
import { observer } from 'mobx-react';
import { Title } from 'lib/constant/Components';
import styled from 'styled-components';

const BannerImage = styled.img`
	width: 100%;
	height: 30vh;
	object-fit: cover;
`;

const ContentContainer = styled.div`
	width: 90%;
	padding: 10px;
	overflow: scroll;
`;

const TitleBanner = styled(Title)`
	width: 100%;
	text-align: center;
`;

const PostDetailBody = observer(() => {
	const { PostStore } = useStore();
	const post = PostStore.currentPost;

	if (!post) return null;
	return (
		<>
			<BannerImage
				src={
					post.thumbnail ||
					`${process.env.PUBLIC_URL}/img/default_${post.post_type.toLowerCase()}.jpg`
				}
			/>
			<TitleBanner>{post.title}</TitleBanner>
			<ContentContainer dangerouslySetInnerHTML={{ __html: post.content }} />
		</>
	);
});

export default PostDetailBody;
