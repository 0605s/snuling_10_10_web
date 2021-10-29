import PageTemplate from 'components/template/PageTemplate';
import { EventsMenus } from 'lib/menus';

const EventsColloquium = () => {
	return <PageTemplate title="Events & News" menu={EventsMenus} />;
};

export default EventsColloquium;
