import { observable } from 'mobx';

const ToastStore = observable({
	isOpen: false as boolean,
	message: { type: 'error', text: '' } as {
		type: 'error' | 'warning' | 'info' | 'success';
		text: string;
	},

	setIsOpen(isOpen: boolean) {
		this.isOpen = isOpen;
	},
	setMessage(type: 'error' | 'warning' | 'info' | 'success', text: string) {
		this.message.text = text;
		this.message.type = type;
		this.setIsOpen(true);
	},
});

export default ToastStore;
