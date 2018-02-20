import { Book } from './book';

export class BooksAPIResponse {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: Book[];
}