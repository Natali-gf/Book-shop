import { ParentElement } from "../types/parentElement";

export interface IModule {
	_parentBlock: ParentElement;
	rendering(): void;
}