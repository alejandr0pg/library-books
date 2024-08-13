import React, { Fragment, useState } from 'react';
import SearchSection from '../../components/search-section/SearchSection';
import BookList from '../../components/book-list/BookList';
import useBooks from '../../hooks/queries/useBooks';
import BookListSkeleton from '../../components/skeletons/book-list-skeleton/BookListSkeleton';
import useDebounce from '../../hooks/useDebounce';

const Home: React.FunctionComponent = () => {
  const { isPending, error, data } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  return (
    <Fragment>
      <SearchSection setSearchTerm={setSearchTerm} />
      {isPending && <BookListSkeleton />}
      {error && 'An error has occurred: ' + error.message}
      {data && <BookList searchTerm={debouncedSearchTerm} books={data} />}
    </Fragment>
  );
};

export default Home;
