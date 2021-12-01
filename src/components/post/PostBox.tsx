import { PostType } from 'types/post';
import styled from 'styled-components';
import { Content } from 'lib/constant/Components';
import { dateToString } from 'lib/api/Date';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Container = styled.div`
	width: 100%;
	height: 400px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	cursor: pointer;
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

const DateLabel = styled.div`
	font-size: 0.9rem;
	font-weight: 400;
	color: grey;
`;

interface Props {
	post: PostType;
}

const PostBox = ({ post }: Props) => {
	const history = useHistory();
	return (
		<Container onClick={() => history.push(`/${post.post_type.toLowerCase()}/${post.id}`)}>
			<ImageContainer src={post.thumbnail || `${process.env.PUBLIC_URL}/img/default_1.jpg`} />
			<LabelContainer>
				<TitleLabel>{post.title}</TitleLabel>
				<DateLabel>{dateToString(new Date(post.pub_date))}</DateLabel>
			</LabelContainer>
		</Container>
	);
};

export default PostBox;
