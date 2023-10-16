import { images } from "../../data/sliderImages";
import { IModule } from "../../interfaces/module";
import { Book } from "../../types/book";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import MainButton from "../ui/button/MainBatton";
import style from './style.module.scss';

export default class BooksSection implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = `${style.books}`;
	public booksData: Book[];
	// private isBookChoosed: boolean = false;
	// private buttonBuyName: string = this.isBookChoosed ? 'in the cart' : 'buy now';
	private buttonBuy: MainButton;

	constructor() {
		// this.booksData

	}

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this.showBooks();
	}

	private showBooks(index: number = 0) {
		this._parentBlock.innerHTML = `
			<ul id='booksList' class='${style.books__list} container'>
				${this.booksData.map((item, idx) => (
					`<li class='${style.books__item} ${style.book}'>
						<div class=${style.book__img}>
							<img src=${item.image} alt=${item.title}>
						</div>
						<div class=${style.book__detail}>
							<h4 class=${style.book__authors}>${item.authors}</h4>
							<h3 class=${style.book__title}>${item.title}</h3>
							<div class='${style.book__rating} ${style.rating}'>
								<div class=${style.rating__avr}
									style="background: linear-gradient(to right, #fcd809 ${item.averageRating * 100 / 5}%, #EFEEF6 ${item.averageRating * 100 / 5}%)">
								</div>
								<div class=${style.rating__count}>${item.ratingsCount || 0} review</div>
							</div>
							<div class=${style.book__description}>${item.description}</div>
							<div class=${style.book__price}>${item.price || 'Not sale'}</div>
							<button class='${style.book__buttonBuy} bookButton'
									data-index=${idx}>
								${ShoppingCart.goodsInCart[item.id]
								? 'in the cart' : 'buy now'}
							</button>
						</div>
					</li>`
				)).join('')}
			</ul>`

			this.addEvents();
	}

	private addEvents(): void {

		const booksList = document.getElementById('booksList');

		booksList.addEventListener('click', (e: MouseEvent): void => {
			const target: HTMLElement = e.target as HTMLElement;
			if (target.classList.contains('bookButton')) {
				const bookIndex = Number(target.getAttribute('data-index'))

				ShoppingCart.goodsInCart[this.booksData[bookIndex].id]
					? delete ShoppingCart.goodsInCart[this.booksData[bookIndex].id]
					: ShoppingCart.goodsInCart[this.booksData[bookIndex].id] = this.booksData[bookIndex]
			}


			// const target: HTMLLIElement = e.target as HTMLLIElement;
			// const choosedIndex = Number(target.getAttribute('data-index'))

		})
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}