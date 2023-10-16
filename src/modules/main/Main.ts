import { IModule } from "../../interfaces/module";
import BooksSection from "../booksSection/BooksSection";
import Categories from "../categories/Categories";
import Slider from "../slider/Slider";
import style from './style.module.scss';

export default class Main implements IModule {
	public _parentBlock: HTMLElement = document.createElement('main');
	private blockClassName: string = style.wrapper__main;
	private slider: Slider;
	private categories: Categories;
	private booksSection: BooksSection;

	constructor() {
		this.slider = new Slider();
		this.categories = new Categories();
		// this.booksSection = new BooksSection()
	}
	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.append(this.slider.parentBlock);
		const mainContent: HTMLDivElement = document.createElement('div');
		mainContent.className = style.main__content;
		mainContent.append(this.categories.parentBlock);
		// mainContent.append(this.booksSection.parentBlock);
		this._parentBlock.append(mainContent);
		this.slider.rendering();
		this.categories.rendering();
		// this.booksSection.rendering();
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}