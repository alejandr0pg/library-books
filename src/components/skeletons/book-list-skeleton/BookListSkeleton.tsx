import React from 'react';
import BookSkeleton from '../book-skeleton/BookSkeleton';

const BookListSkeleton: React.FunctionComponent = () => {
  const fakeBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="container mx-auto mb-20">
      <div className="flex justify-between px-12">
        <p className="font-bold my-10 text-2xl">
          <div className="card bg-base-100 image-full  w-80 z-0 ">
            <div className="skeleton h-8"></div>
          </div>
        </p>
        <div className="dropdown dropdown-hover dropdown-end">
          <div role="button" className="btn btn-outline m-1 mt-9 btn-disabled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
            Filtros
          </div>
        </div>
      </div>

      <ul className="flex flex-row gap-4 flex-wrap justify-center">
        {fakeBooks.map((book) => (
          <li key={`li-${book}`}>
            <BookSkeleton key={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookListSkeleton;
