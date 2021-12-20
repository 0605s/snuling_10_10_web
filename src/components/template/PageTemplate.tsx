import { SNUBLUE, SNUGRAY } from 'lib/constant';
import { Content, SubTitle } from 'lib/constant/Components';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LeftMenuTemplate from './LeftMenuTemplate';

const PageTemplateContainer = styled.div`
	flex: 1;
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #fafafa;
	z-index: 10;
`;

const ChildrenContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px max(calc((100vw - 1100px) / 2), 5vw);
	box-sizing: content-box;
	@media screen and (max-width: 800px) {
		padding: 30px 5vw;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* height: 150px; */
	padding: 20px max(calc((100vw - 1100px) / 2), 5vw);
`;

const TitleLabel = styled(SubTitle)`
	width: fit-content;
	text-align: center;
	padding: 20px;
	border-bottom: 5px solid ${SNUBLUE};
	font-size: 2.5rem;
	@media screen and (max-width: 800px) {
		font-size: 25px;
		padding: 10px;
		border-bottom: 3px solid ${SNUBLUE};
	}
`;

interface Props {
	title?: string;
	children?: ReactNode;
}

const PageTemplate = ({ title, children }: Props) => {
	const { t } = useTranslation();
	return (
		<PageTemplateContainer>
			{title && (
				<TitleContainer>
					<TitleLabel>{t(title).toUpperCase()}</TitleLabel>
				</TitleContainer>
			)}
			<ChildrenContainer data-aos="fade-up">{children}</ChildrenContainer>
		</PageTemplateContainer>
	);
};

export default PageTemplate;
