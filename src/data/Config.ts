import { Link } from "../types/link";

export default class Config {
	nameShop: string = 'Bookshop';
	noInfoMessage: string = 'No information';
	apiKey: string = 'AIzaSyDVdXgclikW_8JdrDn7EvRN2W8IzSBKAR0'//здесь ему не место наверное, но тут в целом не продумана авторизация, чтобы получать этот токен обычным путём
	advertisementMain: Link = {
		title: 'Change old book on new',
		link: '#'
	}
	advertisementSecondary: Link = {
		title: 'top <br>100 books 2022',
		link: '#'
	}
}