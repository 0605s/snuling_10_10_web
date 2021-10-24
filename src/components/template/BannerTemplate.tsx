import { Content, RowContainer, Title } from 'lib/constant/Components';
import styled from 'styled-components';

interface Props {
	title: string;
	subTitle?: string;
	// backgroundImg?: string;
}

const BannerContainer = styled(RowContainer)`
	text-align: center;
	padding: 20px 0px;
`;

const BannerTemplate = ({ title, subTitle }: Props) => {
	return (
		<RowContainer>
			<BannerContainer>
				<Title>{title}</Title>
				{/* <Divider orientation="horizontal" /> */}
				{/* {subTitle && <Content>{subTitle}</Content>} */}
			</BannerContainer>
		</RowContainer>
	);
};

export default BannerTemplate;
