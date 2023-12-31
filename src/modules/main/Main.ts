import BooksRequest from "../../helpers/BooksRequest";
import { toBookType } from "../../helpers/toBookType";
import { IModule } from "../../interfaces/module";
import { Book } from "../../types/book";
import BooksSection from "../booksSection/BooksSection";
import ButtonMore from "../buttonMore/ButtonMore";
import Categories from "../categories/Categories";
import Slider from "../slider/Slider";
import style from './style.module.scss';

export default class Main implements IModule {
	public _parentBlock: HTMLElement = document.createElement('main');
	private blockClassName: string = style.wrapper__main;
	private mainContent: HTMLDivElement;
	private slider: Slider;
	private categories: Categories;
	private booksSection: BooksSection;
	private booksRequest: BooksRequest;
	private buttonMore: ButtonMore;

	constructor() {
		this.slider = new Slider();
		this.categories = new Categories();
		this.booksSection = new BooksSection();
		this.booksRequest = new BooksRequest();
		this.buttonMore = new ButtonMore();
	}

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.append(this.slider.parentBlock);
		this.mainContent = document.createElement('div');
		this.mainContent.className = style.main__content;
		this.mainContent.append(this.categories.parentBlock);
		this._parentBlock.append(this.mainContent);
		this._parentBlock.append(this.buttonMore.parentBlock);
		this.slider.rendering();
		this.categories.rendering();
		this.buttonMore.rendering();

		this.getBooksSection();
	}

	public async getBooksSection(): Promise<void> {
		const result: any = await this.booksRequest.getBooksByCategory();
		const books: Book[] = toBookType(result);

		Categories.currentCategory.startIndex = Categories.currentCategory.startIndex + 6;
		BooksSection.booksData = books;

		this.mainContent.append(this.booksSection.parentBlock);
		this.booksSection.rendering();
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}