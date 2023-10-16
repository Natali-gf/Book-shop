import { ParentElement } from "../types/parentElement";

export interface IModule {
	_parentBlock: ParentElement;
	// blockClassName: string;
	rendering(): void;
}