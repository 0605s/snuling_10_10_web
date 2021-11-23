import { ExperimentType } from 'types/experiment';
import styled from 'styled-components';
import { Content, SubTitle, SubContent } from 'lib/constant/Components';
import { useHistory } from 'react-router';
import { useCallback } from 'react';
import { Chip, Stack } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import { SNUGRAY } from 'lib/constant';

const BoxContainer = styled.div`
	width: 100%;
	height: 250px;
	padding: 0px 20px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	:hover {
		opacity: 0.7;
		cursor: pointer;
	}
`;

const TitleLabel = styled(Content)`
	text-align: center;
	height: 4rem;
`;

const OnOffChip = styled(Chip)`
	font-size: 1rem;
	font-weight: 400;
	position: absolute;
	top: 5%;
	right: 5%;
	z-index: 2;
`;

const LanguageChip = styled(Chip)``;

const BottomBar = styled.div<{ isFull: boolean }>`
	position: absolute;
	bottom: 0px;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0px 0px 10px 10px;
	background-color: ${(props) => (props.isFull ? SNUGRAY : 'green')};
	color: white;
	font-size: 1.3 rem;
	font-weight: 500;
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
		<BoxContainer onClick={onClickBox} data-aos="fade-up">
			<TitleLabel>{item.title}</TitleLabel>
			{item.exp_type === 'ON' ? (
				<OnOffChip icon={<PublicIcon />} label="ONLINE" />
			) : (
				<OnOffChip icon={<CloudOffIcon />} label="OFFLINE" />
			)}
			<Stack direction="row" spacing={1} style={{ marginTop: 20 }}>
				{item.lingual &&
					item.lingual.split(',').map((lang) => {
						return (
							<LanguageChip
								label={`# ${lang}`}
								key={lang}
								variant="outlined"
								size="small"
							/>
						);
					})}
			</Stack>
			<BottomBar isFull={item.is_full}>
				{item.is_full
					? '모집 완료'
					: `모집중 ${item.count_participants}명 / ${item.max_participants}명
`}
			</BottomBar>
			{/* <Content>{item.reward_price}</Content> */}
		</BoxContainer>
	);
};

export default ExperimentBox;
