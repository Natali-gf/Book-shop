import { IModule } from "../../interfaces/module";
import style from './style.module.scss';

export default class Search implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = `${style.search}`;

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}