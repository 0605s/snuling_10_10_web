import PageTemplate from 'components/template/PageTemplate';
import { useParams } from 'react-router';
import { ResearchMenus } from 'lib/menus';

const ResearchProjects = () => {
	const { type } = useParams<{ type: string }>();
	return <PageTemplate title={type} menu={ResearchMenus} />;
};

export default ResearchProjects;
