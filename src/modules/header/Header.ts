import Config from '../../data/Config';
import { IModule } from '../../interfaces/module';
import style from './style.module.scss';

type Nav = {
	name: string,
	link: string,
}
const navigationLinks: Nav[] = [
	{name: 'books', link: '#'},
	{name: 'audiobooks', link: '#'},
	{name: 'Stationery & gifts', link: '#'},
	{name: 'blog', link: '#'}
]

export default class Header implements IModule {
	public _parentBlock: HTMLElement = document.createElement('header');
	private blockClassName: string = `${style.header} container`;
	private config: Config;

	constructor() {
		this.config = new Config();
	}

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this._parentBlock.innerHTML = `
			<div class=${style.header__logo}>${this.config.nameShop}</div>
			<div class='${style.header__nav} ${style.nav}'>
				<ul class=${style.nav__list}>
					${navigationLinks.map((item: Nav): string => (
						`<li class=${style.nav__item}>
							<a href=${item.link}>${item.name}</a>
						</li>`
					)).join('')}
				</ul>
			</div>
			<div class=${style.header__tools}>
				<div class=${style.header__tools_profile}></div>
			</div>`
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}