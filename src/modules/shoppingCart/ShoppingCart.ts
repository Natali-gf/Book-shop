import { IModule } from "../../interfaces/module";
import { Book } from "../../types/book";
import style from './style.module.scss';

export default class ShoppingCart implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = `${style.cart}`;
	static goodsInCart: {[key: string]: Book} = {};

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.id = 'shoppingCart';

		ShoppingCart.showCart();
	}

	static showCart(): void {
		const renderedBlock: HTMLElement = document.getElementById('shoppingCart');
		const goodsCount: number = Object.keys(ShoppingCart.goodsInCart).length;

		if(goodsCount > 0) {
			renderedBlock.innerHTML = `
			<div class=${style.cart__icon}>${goodsCount}</div>`
		} else {
			renderedBlock.innerHTML = '';
		}
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}