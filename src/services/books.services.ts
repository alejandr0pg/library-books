import { fetchAPI } from '../helpers/api.helper';
import { IBook } from '../interfaces/books.interface';

async function getAllBooks() {
  const {
    default: { library },
  } = await fetchAPI();

  return library.map((item: { book: IBook }) => item.book) as IBook[];
}

export const books = {
  getAllBooks,
};
