import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { RowContainer } from 'lib/constant/Components';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import useStore from 'store/Index';

const ExperimentBody = observer(() => {
	const history = useHistory();
	const { ExperimentStore } = useStore();

	useEffect(() => {
		ExperimentStore.getExperimentList();
	}, []);

	return (
		<RowContainer>
			<Table>
				<TableHead />
				<TableBody>
					{ExperimentStore.experimentList.map((item) => {
						return (
							<TableRow
								onClick={() => history.push(`/experiment/${item.id}`)}
								key={item.title}
							>
								<TableCell>{item.title}</TableCell>
								<TableCell>{item.status}</TableCell>
								<TableCell>{item.is_full}</TableCell>
								<TableCell>{item.lingual}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</RowContainer>
	);
});

export default ExperimentBody;
