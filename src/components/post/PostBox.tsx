import { PostType } from 'types/post';
import styled from 'styled-components';
import { dateToString } from 'lib/api/Date';
import { useHistory } from 'react-router';
import { SNUBLUE } from 'lib/constant';
import useStore from 'store/Index';

const Container = styled.div`
	width: 100%;
	height: 400px;
	position: relative;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	cursor: pointer;
	transition: all 0.3s;
	:hover {
		box-shadow: 0 6px 35px rgba(24, 25, 31, 0.15);
		transform: translateY(-4px);
	}
`;

const ImageContainer = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`;

const LabelContainer = styled.div`
	padding: 10px 20px;
`;

const TitleLabel = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
`;

const TagLabel = styled.div`
	font-size: 0.9rem;
	font-weight: 400;
	margin-top: 10px;
	color: grey;
`;

const DateLabel = styled.div`
	font-size: 0.9rem;
	font-weight: 400;
	margin-top: 10px;
	color: grey;
`;

const ReadMoreLabel = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	font-size: 1.1rem;
	font-weight: 400;
	color: ${SNUBLUE};
`;

interface Props {
	post: PostType;
}

const PostBox = ({ post }: Props) => {
	const history = useHistory();
	return (
		<Container onClick={() => history.push(`/${post.post_type.toLowerCase()}/${post.id}`)}>
			<ImageContainer
				src={
					post.thumbnail || `${process.env.PUBLIC_URL}/img/default_${post.post_type}.jpg`
				}
			/>
			<LabelContainer>
				<TagLabel>{post.tags}</TagLabel>
				<TitleLabel>{post.title}</TitleLabel>
				<DateLabel>{dateToString(new Date(post.pub_date))}</DateLabel>
				<ReadMoreLabel>READ MORE &gt;</ReadMoreLabel>
			</LabelContainer>
		</Container>
	);
};

export default PostBox;
