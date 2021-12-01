import { SNUBLUE, SNUGRAY } from 'lib/constant';
import { SubTitle } from 'lib/constant/Components';
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
	padding: 0px 2vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px max(calc((100vw - 1100px) / 2), 5vw);
	/* border-left: 0.5px solid black; */
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 150px;
	padding: 0px max(calc((100vw - 1100px) / 2), 5vw);
`;

const TitleLabel = styled(SubTitle)`
	width: fit-content;
	text-align: center;
	margin-top: 50px;
	border-bottom: 5px solid ${SNUBLUE};
	font-size: 2.5rem;
`;

interface Props {
	title?: string;
	menu?: { title: string; domain: string }[];
	children?: ReactNode;
}

const PageTemplate = ({ title, menu, children }: Props) => {
	const { t } = useTranslation();
	return (
		<PageTemplateContainer>
			{/* {menu && <LeftMenuTemplate menu={menu} />} */}
			{title && (
				<TitleContainer>
					<TitleLabel>{t(title)}</TitleLabel>
				</TitleContainer>
			)}
			<ChildrenContainer data-aos="fade-up">{children && children}</ChildrenContainer>
		</PageTemplateContainer>
	);
};

export default PageTemplate;
