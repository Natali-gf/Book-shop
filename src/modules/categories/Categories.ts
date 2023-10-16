import { categories } from "../../data/categories";
import { images } from "../../data/sliderImages";
import { IModule } from "../../interfaces/module";
import style from './style.module.scss';



export default class Categories implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = style.category;

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this.showCategoriesList();
	}

	private showCategoriesList(index: number = 0) {
		this._parentBlock.innerHTML = `
			<ul id='categoriesList' class=${style.category__list}>
				${categories.map((item, idx) => (
					`<li data-index=${idx}
						class=${index === idx
						? style.category__item_active
						: style.category__item}>
						${item.name}
					</li>`
				)).join('')}
			</ul>`

		// const nextIndex = index === images.length - 1 ? 0 : index + 1;

		this.addEvents();
	}

	private addEvents(): void {
		const sliderDotList = document.getElementById('sliderDotList');

		sliderDotList.addEventListener('click', (e: MouseEvent): void => {

			const target: HTMLLIElement = e.target as HTMLLIElement;
			const choosedIndex = Number(target.getAttribute('data-index'))

			this.showCategoriesList(choosedIndex);
		})
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}