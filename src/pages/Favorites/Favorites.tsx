import React, { Fragment, useState } from 'react';
import SearchSection from '../../components/search-section/SearchSection';
import BookList from '../../components/book-list/BookList';
import { useMyFavoriteStore } from '../../stores/myFavoritesBooks.store';

const Favorites: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const books = useMyFavoriteStore((state) => state.books);

  return (
    <Fragment>
      <SearchSection small setSearchTerm={setSearchTerm} />
      <BookList
        searchTerm={searchTerm}
        title="Listado de libros favoritos"
        books={books}
      />
    </Fragment>
  );
};

export default Favorites;
