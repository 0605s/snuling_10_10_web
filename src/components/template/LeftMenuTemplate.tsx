import { Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LeftMenuContainer = styled(Tabs)`
	display: flex;
	flex-direction: column;
`;

const MenuItem = styled(Tab)`
	width: 200px;
	font-size: 20px;
	height: 50px;
`;

interface Props {
	menu: { title: string; domain: string }[];
}

const LeftMenuTemplate = ({ menu }: Props) => {
	const location = useLocation();
	const history = useHistory();
	const { t } = useTranslation();

	const getMenu = () => {
		const secondPath = location.pathname;
		if (menu.map((e) => e.domain).includes(secondPath)) return `${secondPath}`;
		return false;
	};

	return (
		<LeftMenuContainer value={getMenu()} orientation="vertical">
			{menu.map((item) => {
				return (
					<MenuItem
						label={t(item.title)}
						value={item.domain}
						key={item.title}
						onClick={() => history.push(`${item.domain}`)}
					/>
				);
			})}
		</LeftMenuContainer>
	);
};

export default LeftMenuTemplate;
