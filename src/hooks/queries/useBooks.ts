import { useQuery } from '@tanstack/react-query';
import { books } from '../../services/books.services';

const useBooks = () => {
  return useQuery({
    queryKey: ['books'],
    queryFn: books.getAllBooks,
  });
};

export default useBooks;
