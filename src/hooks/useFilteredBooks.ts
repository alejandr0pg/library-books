import { useMemo } from 'react';
import { IBook } from '../interfaces/books.interface';
import { useMyFavoriteStore } from '../stores/myFavoritesBooks.store';

interface IProps {
  searchTerm: string;
  data: IBook[];
  genre: string;
  author: string;
  skipFavorites?: boolean;
}

const useFilteredBooks = ({
  searchTerm,
  data,
  genre = 'Todos',
  author = 'Todos',
  skipFavorites = true,
}: IProps) => {
  const favorites = useMyFavoriteStore((state) =>
    state.books.map((book) => book.ISBN)
  );

  return useMemo(() => {
    const regex = new RegExp(searchTerm, 'i');
    let filterData = data
      .filter((book) => genre === 'Todos' || book.genre == genre)
      .filter((book) => author === 'Todos' || book.author.name == author)
      .filter((book) => searchTerm === '' || book.title.match(regex));

    if (skipFavorites) {
      filterData = filterData.filter((book) => !(book.ISBN in favorites));
    }

    return filterData;
  }, [searchTerm, data, skipFavorites, genre, author, favorites]);
};

export default useFilteredBooks;
