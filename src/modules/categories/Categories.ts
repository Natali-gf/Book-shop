import { categories } from "../../data/categories";
import BooksRequest from "../../helpers/BooksRequest";
import { toBookType } from "../../helpers/toBookType";
import { IModule } from "../../interfaces/module";
import BooksSection from "../booksSection/BooksSection";
import style from './style.module.scss';

export default class Categories implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = style.category;
	private booksRequest: BooksRequest;

	constructor() {
		this.booksRequest = new BooksRequest();
	}

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this.showCategoriesList();
	}

	private showCategoriesList(index: number = 0): void {
		this._parentBlock.innerHTML = `
			<div class='${style.category__container} container'>
				<ul id='categoriesList' class=${style.category__list}>
					${categories.map((item, idx) => (
						`<li data-index=${idx}
							class=${index === idx
							? style.category__item_active
							: style.category__item}>
							${item.name}
						</li>`
					)).join('')}
				</ul>
			</div>`

		this.addEvents();
	}

	private addEvents(): void {
		const categoriesList: HTMLElement = document.getElementById('categoriesList');

		categoriesList.addEventListener('click', async(e: MouseEvent): Promise<void> => {
			
			if(e.target != categoriesList) {
				const target: HTMLLIElement = e.target as HTMLLIElement;
				const categoryIndex: number = Number(target.getAttribute('data-index'));

				this.booksRequest.getBooksByCategory(categoryIndex)
					.then((response: any) => {
						BooksSection.booksData = toBookType(response);
						BooksSection.showBooks();
					});

				this.showCategoriesList(categoryIndex);
			}
		})
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}