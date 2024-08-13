import { useMemo } from 'react';
import { IBook } from '../interfaces/books.interface';

interface IProps {
  data: IBook[];
}

const useFilterOptions = ({ data }: IProps) => {
  return useMemo(() => {
    const genres = new Set(['Todos']);
    const authors = new Set(['Todos']);

    data?.forEach((book) => {
      genres.add(book.genre);
      authors.add(book.author.name);
    });

    return { genres, authors };
  }, [data]);
};

export default useFilterOptions;
