import React, { Fragment, useState } from 'react';
import SearchSection from '../../components/search-section/SearchSection';
import BookList from '../../components/book-list/BookList';
import { useMyFavoriteStore } from '../../stores/myFavoritesBooks.store';
import useDebounce from '../../hooks/useDebounce';

const Favorites: React.FunctionComponent = () => {
  const books = useMyFavoriteStore((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  return (
    <Fragment>
      <SearchSection small setSearchTerm={setSearchTerm} />
      <BookList
        searchTerm={debouncedSearchTerm}
        title="Listado de libros favoritos"
        books={books}
      />
    </Fragment>
  );
};

export default Favorites;
