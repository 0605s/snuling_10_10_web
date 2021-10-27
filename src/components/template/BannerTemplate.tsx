import styled from 'styled-components';
import { Divider } from '@mui/material';
import { Content, RowContainer, Title } from 'lib/constant/Components';

interface Props {
	title: string;
	subTitle?: string;
	// backgroundImg?: string;
}

const BannerTemplate = ({ title, subTitle }: Props) => {
	return (
		<RowContainer>
			<Title>{title}</Title>
			<Divider orientation="horizontal" variant="middle" flexItem />
			{/* {subTitle && <Content>{subTitle}</Content>} */}
		</RowContainer>
	);
};

export default BannerTemplate;
