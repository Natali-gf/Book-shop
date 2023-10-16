import Header from "../modules/header/Header";
import Main from "../modules/main/Main";

export default class App {
	public _root: HTMLElement;
	private header: Header;
	private main: Main;


	public constructor() {
		this._root = document.getElementById('root');
		this.header = new Header();
		this.main = new Main();
	}

	public rendering(): void {
		this._root.append(this.header.parentBlock);
		this._root.append(this.main.parentBlock);
		this.header.rendering();
		this.main.rendering();
	}

	public get body(): HTMLElement {
		return this._root;
	}
}
