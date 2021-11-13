import { RowContainer } from 'lib/constant/Components';
import { ReactNode } from 'react';
import styled from 'styled-components';
import BannerTemplate from './BannerTemplate';
import LeftMenuTemplate from './LeftMenuTemplate';

const PageTemplateContainer = styled.div`
	flex: 1;
	width: 100vw;
	box-sizing: border-box;
	padding: 20px max(calc((100vw - 1000px) / 2), 5vw);
	padding-bottom: 100px;
`;

const InnerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const ChildrenContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

interface Props {
	title?: string;
	menu?: { title: string; domain: string }[];
	children?: ReactNode;
}

const PageTemplate = ({ title, menu, children }: Props) => {
	return (
		<PageTemplateContainer>
			{title && <BannerTemplate title={title} />}
			<InnerContainer>
				{menu && <LeftMenuTemplate menu={menu} />}
				<ChildrenContainer>{children && children}</ChildrenContainer>
			</InnerContainer>
		</PageTemplateContainer>
	);
};

export default PageTemplate;
