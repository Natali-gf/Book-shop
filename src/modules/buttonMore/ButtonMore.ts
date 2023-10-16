import BooksRequest from "../../helpers/BooksRequest";
import { toBookType } from "../../helpers/toBookType";
import { IModule } from "../../interfaces/module";
import BooksSection from "../booksSection/BooksSection";
import Categories from "../categories/Categories";
import style from './style.module.scss';

export default class ButtonMore implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = style.buttonBlock;
	private blockId: string = 'buttonMore';
	private booksRequest: BooksRequest;
	private buttonName: string = 'Load more';

	constructor() {
		this.booksRequest = new BooksRequest();
	}

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.id = this.blockId;
		this._parentBlock.innerHTML = `
			<button class=${style.button}>${this.buttonName}</button>`;

		this.addEvents();
	}

	private addEvents(): void {
		this._parentBlock.addEventListener('click', async(e: MouseEvent): Promise<void> => {

			this.booksRequest.getBooksByCategory(Categories.currentCategory.index, Categories.currentCategory.startIndex)
				.then((response: any) => {
					BooksSection.booksData = [
						...BooksSection.booksData, ...toBookType(response)
					];
					BooksSection.showBooks();
				});
		})
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}