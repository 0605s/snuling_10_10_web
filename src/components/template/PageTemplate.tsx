import { SubTitle } from 'lib/constant/Components';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LeftMenuTemplate from './LeftMenuTemplate';

const PageTemplateContainer = styled.div`
	flex: 1;
	width: 100vw;
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	padding: 50px max(calc((100vw - 1000px) / 2), 5vw);
`;

const ChildrenContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleLabel = styled(SubTitle)`
	height: 100px;
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
			{menu && <LeftMenuTemplate menu={menu} />}
			<ChildrenContainer>
				{title && <TitleLabel>{t(title)}</TitleLabel>}
				{children && children}
			</ChildrenContainer>
		</PageTemplateContainer>
	);
};

export default PageTemplate;
