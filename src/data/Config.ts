// import { FavoriteComment } from "../enum/favorite";
// import { RatingType } from "../enum/rating";

// export type Id = `${string}-${string}-${string}-${string}-${string}`;



// export type Comment = {
// 	id: Id,
// 	parentId: Id | null,
// 	answerIds: Id[],
// 	lastAnswer: Date,
// 	userPhoto: string,
// 	userName: string,
// 	dataComment: Date,
// }



export default class Config {
	nameShop: string = 'Bookshop';
	noInfoMessage: string = 'No information';
	apiKey: string = 'AIzaSyDVdXgclikW_8JdrDn7EvRN2W8IzSBKAR0'//здесь ему не место наверное, но тут в целом не продумана авторизация, чтобы получать этот токен обычным путём
}