import Header from "../modules/header/Header";
import Main from "../modules/main/Main";
// import banner from '../assets/images/banner_01.png';

export default class App {
	public _root: HTMLElement;
	private header: Header;
	private main: Main;


	public constructor() {
		this._root = document.getElementById('root');
		this.header = new Header();
		this.main = new Main();
	}

	public rendering(): void {
		// this._root.innerHTML = `<img src="${banner}">`
		this._root.append(this.header.parentBlock);
		this._root.append(this.main.parentBlock);
		this.header.rendering();
		this.main.rendering();
	}

	// public checkLocalStorage(comments: Comment[]): Comment[] {

	// 	if(!localStorage.getItem('allTheComments')){
	// 		let favoriteComments: Comment[] = [];
	// 		comments.forEach((comment: Comment) => {
	// 			if(comment.isFavorite) {
	// 				favoriteComments.push(comment)
	// 			}
	// 		})
	// 		localStorage.setItem('allTheComments', JSON.stringify(comments));
	// 		localStorage.setItem('favoriteComments', JSON.stringify(favoriteComments));
	// 	}

	// 	return JSON.parse(localStorage.getItem('allTheComments'));
	// }

	public get body(): HTMLElement {
		return this._root;
	}
}
