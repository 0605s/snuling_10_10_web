import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FilterButton = styled(Button)`
	white-space: 'nowrap';
	width: max-content;
`;

interface Props {
	name: string;
	isSelected: boolean;
	onClick: () => void;
}

const ExperimentFilterButton = ({ name, isSelected, onClick }: Props) => {
	const { t } = useTranslation();
	return (
		<FilterButton variant={isSelected ? 'contained' : 'outlined'} onClick={onClick}>
			{t(name)}
		</FilterButton>
	);
};

export default ExperimentFilterButton;
