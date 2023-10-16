
import { IModule } from "../../../interfaces/module";
import style from './style.module.scss';

export default class MainButton {
	public _parentBlock: HTMLButtonElement = document.createElement('button');
	private blockClassName: string = style.mainButton;
	private buttonName: string;
	private buttonElem: HTMLElement;

	constructor(btnName: string) {
		this.buttonName = btnName;
	}

	public rendering(): HTMLButtonElement {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.append(this.buttonName);

		return this._parentBlock;
	}

	public addEvents(buttonId: string, cb: () => void): void {
		this._parentBlock.id = buttonId;
		this.buttonElem = document.getElementById(buttonId);

		this.buttonElem.addEventListener('click', cb)
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}