import styled from 'styled-components';
import { FormControlLabel, Stack, Checkbox } from '@mui/material';
import { expTypeFilterList, lingualFilterList, statusFilterList } from 'lib/constant';
import { useState } from 'react';
import useStore from 'store/Index';
import { observer } from 'mobx-react';
import { StatusType } from 'types/experiment';
import { useTranslation } from 'react-i18next';
import { SubContent } from 'lib/constant/Components';
import TuneIcon from '@mui/icons-material/Tune';
import ExperimentFilterButton from './ExperimentFilterButton';

const FilterContainer = styled.div`
	width: 100%;
	margin-bottom: 30px;
	border-radius: 10px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const UpperContainer = styled.div<{ filterVisible: boolean }>`
	width: 100%;
	height: 40px;
	border-radius: ${(props) => (props.filterVisible ? '10px 10px 0px 0px' : '10px')};
	background-color: #d5d5d5;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LowerContainer = styled.div`
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	background-color: #ffffff;
`;

const FilterLabel = styled(SubContent)`
	width: 20%;
	text-align: right;
	font-weight: 500;
	padding-right: 20px;
	border-right: 0.5px solid black;
`;

const ButtonList = styled(Stack)`
	margin: 20px 0px;
`;

const ExperimentFilter = observer(() => {
	const { ExperimentStore, LoadingStore } = useStore();
	const { t } = useTranslation();
	const [filterVisible, setFilterVisible] = useState<boolean>(false);
	const [statusFilter, setStatusFilter] = useState<StatusType | undefined>(undefined);
	const [availableFilter, setavailableFilter] = useState<boolean>(false);
	const [expTypeFilter, setExpTypeFilter] = useState<'ON' | 'OFF' | undefined>(undefined);
	const [lingualFilter, setLingualFilter] = useState<string[]>([]);

	const onClickStatusButton = async (value: StatusType) => {
		LoadingStore.setLoading(true);
		setStatusFilter(statusFilter === value ? undefined : value);
		let res = await ExperimentStore.getExperimentList(
			lingualFilter.join(','),
			statusFilter === value ? undefined : value,
			availableFilter,
			expTypeFilter,
		);
		if (res) LoadingStore.setLoading(false);
	};

	const onClickAvailableButton = async (value: boolean) => {
		LoadingStore.setLoading(true);
		setavailableFilter(value);
		let res = await ExperimentStore.getExperimentList(
			lingualFilter.join(','),
			statusFilter,
			value,
			expTypeFilter,
		);
		if (res) LoadingStore.setLoading(false);
	};

	const onClickExpTypeButton = async (value: 'ON' | 'OFF') => {
		LoadingStore.setLoading(true);
		setExpTypeFilter(expTypeFilter === value ? undefined : value);
		let res = await ExperimentStore.getExperimentList(
			lingualFilter.join(','),
			statusFilter,
			availableFilter,
			expTypeFilter === value ? undefined : value,
		);
		if (res) LoadingStore.setLoading(false);
	};

	const onClickLingualButton = async (value: string) => {
		LoadingStore.setLoading(true);
		setLingualFilter(
			lingualFilter.includes(value)
				? lingualFilter.filter((e) => e !== value)
				: lingualFilter.concat(value),
		);
		let res = await ExperimentStore.getExperimentList(
			lingualFilter.includes(value)
				? lingualFilter.filter((e) => e !== value).join(',')
				: lingualFilter.concat(value).join(','),
			statusFilter,
			availableFilter,
			expTypeFilter,
		);
		if (res) LoadingStore.setLoading(false);
	};

	return (
		<FilterContainer>
			<UpperContainer
				onClick={() => setFilterVisible(!filterVisible)}
				filterVisible={filterVisible}
			>
				{filterVisible ? '필터 숨기기' : '필터 보기'}
				<TuneIcon sx={{ marginLeft: '10px' }} />
			</UpperContainer>
			{filterVisible && (
				<LowerContainer>
					<ButtonList spacing={2} direction="row" alignItems="center">
						<FilterLabel>{t('status')}</FilterLabel>
						{statusFilterList.map((item) => {
							return (
								<ExperimentFilterButton
									name={item.name}
									isSelected={statusFilter === item.value}
									onClick={() => onClickStatusButton(item.value)}
									key={item.name}
								/>
							);
						})}
					</ButtonList>
					<ButtonList spacing={2} direction="row" alignItems="center">
						<FilterLabel>{t('language')}</FilterLabel>
						{lingualFilterList.map((item) => {
							return (
								<ExperimentFilterButton
									name={item.name}
									isSelected={lingualFilter.includes(item.value)}
									onClick={() => onClickLingualButton(item.value)}
									key={item.name}
								/>
							);
						})}
					</ButtonList>
					<ButtonList spacing={2} direction="row" alignItems="center">
						<FilterLabel>{t('experiment type')}</FilterLabel>
						{expTypeFilterList.map((item) => {
							return (
								<ExperimentFilterButton
									name={item.name}
									isSelected={expTypeFilter === item.value}
									onClick={() => onClickExpTypeButton(item.value)}
									key={item.name}
								/>
							);
						})}
					</ButtonList>
					<FormControlLabel
						control={
							<Checkbox
								checked={availableFilter === true}
								onClick={() => onClickAvailableButton(!availableFilter)}
							/>
						}
						label={t('seeOnlyAvailable')}
						sx={{ marginLeft: '20%' }}
					/>
				</LowerContainer>
			)}
		</FilterContainer>
	);
});

export default ExperimentFilter;
