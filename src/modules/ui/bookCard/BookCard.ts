import { Book } from "../../../types/book";
import { IModule } from "../../../interfaces/module";
import style from './style.module.scss';
import MainButton from "../button/MainBatton";



export default class BookCard implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = style.books;
	public booksData: Book[];
	private isBookChoosed: boolean = false;
	private buttonBuyName: string = this.isBookChoosed ? 'in the cart' : 'buy now';
	private buttonBuy: MainButton;

	constructor() {
		this.booksData
		this.buttonBuy = new MainButton(this.buttonBuyName)
	}

	public rendering(): HTMLDivElement {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.innerHTML = `
			<ul id='booksList' class=${style.books__list}>
				${this.booksData.map((item, idx) => (
					`<li class='${style.books__item} ${style.book}'>
						<div class=${style.book__img}>
							<img class= src=${item.image}>
						</div>
						<div class=${style.book__detail}>
							<h4 class=${style.book__authors}>${item.authors}</h4>
							<h3 class=${style.book__title}>${item.title}</h3>
							<div class='${style.book__rating} ${style.rating}'>
								<div>${item.averageRating}</div>
								<div>${item.ratingsCount}</div>
							</div>
							<div class=${style.book__description}>${item.description}</div>
							<div class=${style.book__price}>${item.price || 'Not sale'}</div>
							<div>${this.buttonBuy.rendering()}</div>
						</div>
					</li>`
				)).join('')}
			</ul>`

		return this._parentBlock;
			// const nextIndex = index === images.length - 1 ? 0 : index + 1;

			// this.addEvents(nextIndex);
	}

	private addEvents(index: number): void {

		const sliderDotList = document.getElementById('sliderDotList');

		sliderDotList.addEventListener('click', (e: MouseEvent): void => {

			const target: HTMLLIElement = e.target as HTMLLIElement;
			const choosedIndex = Number(target.getAttribute('data-index'))

		})
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}