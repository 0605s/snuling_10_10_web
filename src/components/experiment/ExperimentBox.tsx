import { ExperimentType } from 'types/experiment';
import styled from 'styled-components';
import { Content, SubContent } from 'lib/constant/Components';
import { useHistory } from 'react-router';
import { useCallback } from 'react';
import { Chip, Stack } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import { SNUBLUE, SNUGRAY } from 'lib/constant';
import PeopleIcon from '@mui/icons-material/People';

const BoxContainer = styled.div<{ available: boolean }>`
	position: relative;
	width: 100%;
	height: 350px;
	padding: 0px 20px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	cursor: pointer;
	background-color: white;
	:hover {
		color: ${(props) => (props.available ? 'green' : SNUGRAY)};
		box-shadow: 0 6px 35px rgba(24, 25, 31, 0.15);
		transform: translateY(-4px);
	}
`;

const OnOffChip = styled(Chip)`
	font-size: 1rem;
	font-weight: 400;
	position: absolute;
	top: 20px;
	left: 20px;
	z-index: 2;
`;

const TitleLabel = styled(Content)`
	margin-top: 120px;
	height: 100px;
`;

const LanguageChip = styled(Chip)``;

const ParticipantChip = styled(Chip)`
	position: absolute;
	bottom: 30px;
	left: 20px;
	width: 50%;
`;

const TopBar = styled.div<{ available: boolean }>`
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 10px;
	border-radius: 0px 0px 10px 10px;
	background-color: ${(props) => (props.available ? 'green' : SNUGRAY)};
`;

const BottomLabel = styled.div<{ available: boolean }>`
	position: absolute;
	bottom: 35px;
	right: 20px;
	color: ${(props) => (props.available ? 'green' : SNUGRAY)};
	text-align: right;
`;

interface Props {
	item: ExperimentType;
}

const ExperimentBox = ({ item }: Props) => {
	const history = useHistory();
	const onClickBox = useCallback(() => {
		history.push(`/experiment/${item.id}`);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<BoxContainer
			onClick={onClickBox}
			data-aos="fade-up"
			available={!item.is_joined && !item.is_full}
		>
			<TopBar available={!item.is_joined && !item.is_full} />
			<TitleLabel>{item.title}</TitleLabel>
			{item.exp_type === 'ON' ? (
				<OnOffChip icon={<PublicIcon />} label="ONLINE" />
			) : (
				<OnOffChip icon={<CloudOffIcon />} label="OFFLINE" />
			)}
			<Stack direction="row" spacing={1} style={{ marginTop: 20 }}>
				{item.lingual &&
					item.lingual.split(',').map((lang) => {
						return <LanguageChip label={`${lang}`} key={lang} variant="filled" />;
					})}
			</Stack>
			<ParticipantChip
				icon={<PeopleIcon />}
				label={`${item.count_participants}명 / ${item.max_participants}명`}
				variant="outlined"
			/>
			<BottomLabel available={!item.is_joined && !item.is_full}>
				{item.is_joined ? '참여 완료' : item.is_full ? '모집 마감' : `모집중 >`}
			</BottomLabel>
		</BoxContainer>
	);
};

export default ExperimentBox;
