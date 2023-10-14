import { IBlock } from "../../data/Config.js";

export default class Main implements IBlock {
	public _parentBlock: HTMLElement = document.createElement('main');
	private blockClassName: string = 'wrapper__header';

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}