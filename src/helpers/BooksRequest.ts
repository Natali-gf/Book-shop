import Config from "../data/Config";
import { categories } from "../data/categories";

export default class BooksRequest {
	config: Config;

	constructor() {
		this.config = new Config()
	}

	public async getBooksByCategory(categoryIndex: number = 0, startIndex: number = 0): Promise<void> {
		
		return new Promise<void>(async(resolve, reject) => {
			const url = `https://www.googleapis.com/books/v1/volumes?q=${categories[categoryIndex].requestName}&printType=books&startIndex=${startIndex}&maxResults=${startIndex+6}`;
			// &key=${this.config.apiKey}

			fetch(url)
				.then(response => response.json())
				.then(data => resolve(data.items))
				.catch(error => reject(error));
		})
	}
}