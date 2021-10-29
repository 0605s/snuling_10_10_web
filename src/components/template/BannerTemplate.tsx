import styled from 'styled-components';
import { Divider } from '@mui/material';
import { Title } from 'lib/constant/Components';
import { useTranslation } from 'react-i18next';

const BannerContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

interface Props {
	title: string;
	subTitle?: string;
	// backgroundImg?: string;
}

const BannerTemplate = ({ title, subTitle }: Props) => {
	const { t } = useTranslation();
	return (
		<BannerContainer>
			<Title>{t(title)}</Title>
			<Divider orientation="horizontal" variant="middle" flexItem />
			{/* {subTitle && <Content>{subTitle}</Content>} */}
		</BannerContainer>
	);
};

export default BannerTemplate;
