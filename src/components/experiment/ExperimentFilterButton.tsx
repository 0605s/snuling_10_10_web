import { Button } from '@mui/material';

interface Props {
	name: string;
	isSelected: boolean;
	onClick: () => void;
}

const ExperimentFilterButton = ({ name, isSelected, onClick }: Props) => {
	return (
		<Button variant={isSelected ? 'contained' : 'outlined'} onClick={onClick}>
			{name}
		</Button>
	);
};

export default ExperimentFilterButton;
