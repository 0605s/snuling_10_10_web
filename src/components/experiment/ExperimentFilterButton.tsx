import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
	name: string;
	isSelected: boolean;
	onClick: () => void;
}

const ExperimentFilterButton = ({ name, isSelected, onClick }: Props) => {
	const { t } = useTranslation();
	return (
		<Button variant={isSelected ? 'contained' : 'outlined'} onClick={onClick}>
			{t(name)}
		</Button>
	);
};

export default ExperimentFilterButton;
