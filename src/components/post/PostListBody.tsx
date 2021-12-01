import useStore from 'store/Index';
import { observer } from 'mobx-react';
import { Grid } from '@mui/material';
import PostBox from './PostBox';

interface Props {
	postType: 'seminar' | 'colloquium' | 'news';
}

const PostListBody = observer(({ postType }: Props) => {
	const { PostStore } = useStore();
	const postList = PostStore[`${postType}List`];
	if (!postList) return null;
	return (
		<Grid container rowSpacing={2} columnSpacing={3} alignItems="center">
			{postList.map((item) => {
				return (
					<Grid item key={item.title} xs={6} md={6}>
						<PostBox post={item} key={item.title} />
					</Grid>
				);
			})}
		</Grid>
	);
});

export default PostListBody;
