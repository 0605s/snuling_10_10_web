import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import MyPageBoxTemplate from 'components/template/MyPageBoxTemplate';
import { languageList } from 'lib/constant';
import { observer } from 'mobx-react';
import { useState } from 'react';
import useStore from 'store/Index';

const MyPageLingual = observer(() => {
	const { UserStore } = useStore();
	const [langList, setLangList] = useState<string[]>(
		UserStore.user?.profile.lingual ? UserStore.user?.profile.lingual.split(',') : [],
	);
	const [editMode, setEditMode] = useState<boolean>(false);

	const onClickSaveButton = () => {
		setEditMode(!editMode);
	};

	if (UserStore.user === null) return null;
	return (
		<MyPageBoxTemplate
			title="Lingual Settings"
			editMode={editMode}
			onPressEditButton={() => setEditMode(!editMode)}
			onPressSaveButton={onClickSaveButton}
		>
			<div>Languages: {langList.join(', ') || '선호 언어 없음'}</div>
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
		</MyPageBoxTemplate>
	);
});

export default MyPageLingual;
