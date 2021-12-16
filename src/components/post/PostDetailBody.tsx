import useStore from 'store/Index';
import { observer } from 'mobx-react';
import { Title } from 'lib/constant/Components';
import styled from 'styled-components';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

const BackButton = styled(Button)`
	align-self: flex-start;
`;

const BannerImage = styled.img`
	width: 100%;
	height: 30vh;
	object-fit: cover;
	margin-top: 20px;
	@media screen and (max-width: 800px) {
		height: 200px;
	}
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
	const history = useHistory();
	const { t } = useTranslation();
	const { PostStore } = useStore();
	const post = PostStore.currentPost;

	if (!post || !post.post_type) return null;
	return (
		<>
			<BackButton onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>
				{t('go back')}
			</BackButton>
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
