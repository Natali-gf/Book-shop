import Header from "../modules/header/Header";
import Main from "../modules/main/Main";

export default class App {
	public app: HTMLBodyElement;
	private header: Header;
	private main: Main;

	public constructor() {
		this.app = document.querySelector('.wrapper');
		this.header = new Header();
		this.main = new Main();
	}

	public rendering(): void {
		this.app.append(this.header.parentBlock);
		this.app.append(this.main.parentBlock);
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

	public get body(): HTMLBodyElement {
		return this.app;
	}
}
