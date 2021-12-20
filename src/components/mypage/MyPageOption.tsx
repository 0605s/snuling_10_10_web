import { SubContent } from 'lib/constant/Components';
import { useState } from 'react';
import useStore from 'store/Index';
import styled from 'styled-components';
import { IconButton, FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { languageList } from 'lib/constant';
import { observer } from 'mobx-react';

const InfoContainer = styled.div`
	position: relative;
	border-radius: 10px;
	border: 0.5px solid gray;
	width: 90%;
	margin: 30px 0px;
	padding: 10px 20px;
`;

const EditButton = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
`;

const Row = styled.div`
	margin: 10px 0px;
	display: flex;
	flex-direction: row;
`;

const BoldLabel = styled(SubContent)`
	width: 150px;
	font-weight: 500;
`;

const MyPageOption = observer(() => {
	const { UserStore, ToastStore } = useStore();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [langList, setLangList] = useState<string[]>(
		UserStore.user?.profile.lingual ? UserStore.user?.profile.lingual.split(',') : [],
	);
	const [emailAgree, setEmailAgree] = useState<boolean>(
		UserStore.user ? UserStore.user.profile.subscribe : false,
	);

	const onClickEdit = async () => {
		if (editMode) {
			let res = true;
			// let res = await UserStore.postUserInfo('ONLINE', emailAgree, langList.join(','));
			if (res) ToastStore.setMessage('success', '저장되었습니다.');
		}
		setEditMode(!editMode);
	};

	if (!UserStore.user) return null;
	return (
		<InfoContainer>
			<EditButton>
				<IconButton onClick={onClickEdit}>
					{editMode ? <SaveIcon /> : <EditIcon />}
				</IconButton>
			</EditButton>
			<Row>
				<BoldLabel>Email</BoldLabel>
				<SubContent>{UserStore.user?.username}</SubContent>
			</Row>
			<Row>
				<BoldLabel>Languages</BoldLabel>
				{editMode ? (
					<RadioGroup>
						{languageList.map((lang) => {
							return (
								<FormControlLabel
									value={lang}
									control={
										<Radio
											checked={langList.includes(lang)}
											disabled={!editMode}
											onClick={() => {
												if (langList.includes(lang))
													setLangList(langList.filter((e) => e !== lang));
												else setLangList(langList.concat(lang));
											}}
										/>
									}
									label={lang}
									key={lang}
								/>
							);
						})}
					</RadioGroup>
				) : (
					<SubContent>{langList.join(', ') || '선호 언어 없음'}</SubContent>
				)}
			</Row>
			<Row>
				<BoldLabel>Email 수신 동의</BoldLabel>
				{editMode ? (
					<FormControlLabel
						control={
							<Switch
								checked={emailAgree}
								onChange={() => setEmailAgree(!emailAgree)}
							/>
						}
						label={emailAgree ? '동의' : '비동의'}
					/>
				) : (
					<SubContent>{emailAgree ? '동의 ' : '비동의'}</SubContent>
				)}
			</Row>
		</InfoContainer>
	);
});

export default MyPageOption;
