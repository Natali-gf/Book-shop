// import { FavoriteComment } from "../enum/favorite";
// import { RatingType } from "../enum/rating";

// export type Id = `${string}-${string}-${string}-${string}-${string}`;
export type ParentElement = HTMLElement | HTMLDivElement | HTMLButtonElement;


// export type Comment = {
// 	id: Id,
// 	parentId: Id | null,
// 	answerIds: Id[],
// 	lastAnswer: Date,
// 	userPhoto: string,
// 	userName: string,
// 	dataComment: Date,
// }

export interface IBlock {
	_parentBlock: ParentElement;
	// blockClassName: string;
	rendering(): void;
}

export default class Config {
	noInfoMessage: string = 'No information'
}