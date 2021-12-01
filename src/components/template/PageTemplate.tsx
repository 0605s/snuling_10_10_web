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
	padding: 0px 2vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px max(calc((100vw - 1100px) / 2), 5vw);
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
`;

// const SubTitleLabel = styled(Content)`
// 	width: fit-content;
// 	text-align: center;
// 	margin-top: 30px;
// 	color: ${SNUGRAY};
// 	font-size: 1.3rem;
// `;

interface Props {
	title?: string;
	subTitle?: string;
	menu?: { title: string; domain: string }[];
	children?: ReactNode;
}

const PageTemplate = ({ title, subTitle, menu, children }: Props) => {
	const { t } = useTranslation();
	return (
		<PageTemplateContainer>
			{/* {menu && <LeftMenuTemplate menu={menu} />} */}
			{title && (
				<TitleContainer>
					<TitleLabel>{t(title)}</TitleLabel>
					{/* {subTitle && <SubTitleLabel>{t(subTitle)}</SubTitleLabel>} */}
				</TitleContainer>
			)}
			<ChildrenContainer data-aos="fade-up">{children && children}</ChildrenContainer>
		</PageTemplateContainer>
	);
};

export default PageTemplate;
