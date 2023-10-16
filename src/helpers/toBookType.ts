import { Book } from "../types/book";

export function toBookType(array: any): Book[] {
	const booksArray: Book[] = [];
	
	array.forEach((item: any) => {
		booksArray.push({
			id: item.id,
			title: item.volumeInfo.title,
			authors: item.volumeInfo.authors,
			averageRating: item.volumeInfo.averageRating,
			ratingsCount: item.volumeInfo.ratingsCount,
			description: item.volumeInfo.description,
			image: item.volumeInfo.imageLinks.thumbnail,
			price: item.price || null,
		})
	});
	return booksArray;
}