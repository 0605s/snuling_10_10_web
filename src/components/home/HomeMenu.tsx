import { Grid } from '@mui/material';
import { useHistory } from 'react-router';

import HomeMenuItem from './HomeMenuItem';

const tabs: { title: string; url: string }[] = [
	{ title: 'news', url: '/news' },
	{ title: 'colloquium', url: '/colloquium' },
	{ title: 'seminar', url: '/seminar' },
	{ title: 'experiments', url: '/experiment' },
];

const HomeMenu = () => {
	const history = useHistory();

	return (
		<Grid container direction="row">
			{tabs.map((item) => {
				return (
					<Grid
						item
						md={3}
						xs={6}
						key={item.title}
						onClick={() => {
							history.push(item.url);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						<HomeMenuItem item={item} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default HomeMenu;
