import { observable } from 'mobx';

const ToastStore = observable({
	isOpen: false as boolean,
	text: '' as string,

	setIsOpen(isOpen: boolean) {
		this.isOpen = isOpen;
	},
	setText(text: string) {
		this.text = text;
	},
});

export default ToastStore;
