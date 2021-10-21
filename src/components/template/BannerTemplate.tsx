import { Divider } from '@mui/material';
import { Content, RowContainer, Title } from 'lib/constant/Components';
import styled from 'styled-components';

interface Props {
	title: string;
	subTitle?: string;
	// backgroundImg?: string;
}

const BannerContainer = styled.div`
	width: min(100vw, 1100px);
	padding-bottom: 20px;
	border-bottom: 3px solid black;
	align-items: flex-end;
	font-family: 'YoonGothic';
	font-weight: 500;
`;

const BannerTemplate = ({ title, subTitle }: Props) => {
	return (
		<RowContainer>
			<BannerContainer>
				<Title>{title}</Title>
				{/* <Divider orientation="horizontal" /> */}
				{subTitle && <Content>{subTitle}</Content>}
			</BannerContainer>
		</RowContainer>
	);
};

export default BannerTemplate;
