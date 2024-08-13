import React, { useState } from 'react';
import Book from '../book/Book';
import { IBook } from '../../interfaces/books.interface';
import EmptyBooks from '../empty-books/EmptyBooks';
import FilterDropdown from '../filter-dropdown/FilterDropdown';
import useFilterOptions from '../../hooks/useFilterOptions';
import useFilteredBooks from '../../hooks/useFilteredBooks';

type IProps = {
  title?: string;
  books: IBook[];
  searchTerm: string;
};

const BookList: React.FunctionComponent<IProps> = ({
  books,
  title = 'Listado de libros disponibles',
  searchTerm,
}) => {
  const [author, setAuthor] = useState('Todos');
  const [genre, setGenre] = useState('Todos');

  const filterOptions = useFilterOptions({ data: (books || []) as IBook[] });

  const bookFiltered = useFilteredBooks({
    author,
    genre,
    data: books,
    searchTerm,
  });

  return (
    <div className="container mx-auto mb-20">
      <div className="flex justify-between px-12">
        <p className="font-bold my-10 md:text-2xl sm:text-lg">{title}</p>
        <FilterDropdown
          options={filterOptions}
          selectedGenre={genre}
          selectedAuthor={author}
          onSelectedAuthor={setAuthor}
          onSelectedGenre={setGenre}
        />
      </div>

      <ul className="flex flex-row gap-4 flex-wrap justify-center">
        {bookFiltered.map((book) => (
          <li key={`li-${book.title}`}>
            <Book key={book.title} book={book} />
          </li>
        ))}
      </ul>

      {!bookFiltered.length && <EmptyBooks />}
    </div>
  );
};

export default BookList;
