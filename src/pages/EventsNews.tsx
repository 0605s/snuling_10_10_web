import PageTemplate from 'components/template/PageTemplate';
import { EventsMenus } from 'lib/menus';
import { useParams } from 'react-router';

const EventsNews = () => {
	const { type } = useParams<{ type: string }>();
	return <PageTemplate title={type} menu={EventsMenus} />;
};

export default EventsNews;
