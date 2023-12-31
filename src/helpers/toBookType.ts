import { Book } from "../types/book";
import noImage from '../assets/images/no_image.png'

export function toBookType(array: any): Book[] {
	const booksArray: Book[] = [];

	array.forEach((item: any): void => {
		booksArray.push({
			id: item.id,
			title: item.volumeInfo.title,
			authors: item.volumeInfo.authors,
			averageRating: item.volumeInfo.averageRating,
			ratingsCount: item.volumeInfo.ratingsCount,
			description: item.volumeInfo.description,
			image: item.volumeInfo.imageLinks.thumbnail || noImage,
			price: item.saleInfo.retailPrice?.amount || null,
			currencyCode: item.saleInfo.retailPrice?.currencyCode || null,
		})
	});

	return booksArray;
}