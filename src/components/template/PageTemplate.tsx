import { ReactNode } from 'react';

interface Props {
	title?: string;
	menu?: string[];
	children: ReactNode;
}

const PageTemplate = ({ title, menu, children }: Props) => {
	return <div>{children}</div>;
};

export default PageTemplate;
