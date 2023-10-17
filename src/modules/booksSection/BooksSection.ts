import { IModule } from "../../interfaces/module";
import { Book } from "../../types/book";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import style from './style.module.scss';

export default class BooksSection implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = `${style.books}`;
	static booksData: Book[];

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.id = 'booksBlock';

		if(BooksSection.booksData.length) {
			BooksSection.showBooks();
		}
	}

	static showBooks(): void {
		const renderedBlock: HTMLElement = document.getElementById('booksBlock');
		renderedBlock.innerHTML = `
			<ul id='booksList' class='${style.books__list} container'>
				${BooksSection.booksData.map((item, idx) => (
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
								<div class=${style.rating__count}>${item.ratingsCount ? item.ratingsCount + ' review' : 'No rating'}</div>
							</div>
							<div class=${style.book__description}>${item.description}</div>
							<div class=${style.book__price}>
								${item.price || 'Out of stock'} ${item.currencyCode || ''}
							</div>
							<button class='${ShoppingCart.booksInCart[item.id]
											? style.book__buttonBuy_inCart
											: style.book__buttonBuy} bookButton'
									data-index=${idx}>
								${ShoppingCart.booksInCart[item.id]
								? 'in the cart' : 'buy now'}
							</button>
						</div>
					</li>`
				)).join('')}
			</ul>`

		BooksSection.addEvents();
	}

	static addEvents(): void {

		const booksList: HTMLElement = document.getElementById('booksList');

		booksList.addEventListener('click', (e: MouseEvent): void => {
			const target: HTMLElement = e.target as HTMLElement;
			if (target.classList.contains('bookButton')) {
				const bookIndex: number = Number(target.getAttribute('data-index'))

				ShoppingCart.booksInCart[BooksSection.booksData[bookIndex].id]
					? delete ShoppingCart.booksInCart[BooksSection.booksData[bookIndex].id]
					: ShoppingCart.booksInCart[BooksSection.booksData[bookIndex].id] = BooksSection.booksData[bookIndex];

				localStorage.setItem('booksInCart', JSON.stringify(ShoppingCart.booksInCart));

				BooksSection.showBooks();
				ShoppingCart.showCart();
			}
		})
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}