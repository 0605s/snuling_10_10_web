import styled from 'styled-components';
import { Container, Divider, Typography, Stack } from '@mui/material';

interface Props {
	title: string;
	subTitle?: string;
	// backgroundImg?: string;
}

const BannerContainer = styled(Container)`
	height: 200px;
	display: flex;
	padding-bottom: 20px;
	flex-direction: row;
	align-items: flex-end;
	border-bottom: 3px solid black;
	margin-bottom: 100vh;
`;

const BannerTemplate = ({ title, subTitle }: Props) => {
	return (
		<BannerContainer maxWidth="xl">
			<Stack direction="row" spacing={5} alignItems="flex-end" justifyContent="flex-start">
				<Typography variant="h1">{title}</Typography>
				{subTitle && <Typography variant="h5">{subTitle}</Typography>}
			</Stack>
			<Divider orientation="horizontal" />
		</BannerContainer>
	);
};

export default BannerTemplate;
