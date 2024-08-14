import React from 'react';
import clsx from 'clsx';

import { HeartIcon, LinkIcon } from '@heroicons/react/16/solid';
import { useMyFavoriteStore } from '../../stores/myFavoritesBooks.store';
import { IBook } from '../../interfaces/books.interface';

interface IProps {
  book: IBook;
}

const Book: React.FunctionComponent<IProps> = ({ book }) => {
  const { title, cover, year, author } = book;

  const isFavorite = useMyFavoriteStore((state) =>
    state.isFavorite(book)(state)
  );

  const addFavorite = useMyFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useMyFavoriteStore((state) => state.removeFavorite);

  const toogleFavorite = () =>
    isFavorite ? removeFavorite(book) : addFavorite(book);

  return (
    <div
      className="card bg-base-100 image-full w-96 md:w-80 lg:w-56 shadow-xl max-h-80 z-0 cursor-pointer"
      onDoubleClick={toogleFavorite}
    >
      <figure>
        <img src={cover} alt={title} />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title h-10">{title}</h2>
        <div className="grow-0 h-36 content-end">
          <p>
            Año: <strong>{year}</strong>
          </p>
          <p>
            <strong>{author.name}</strong>
          </p>
        </div>
        <div className="card-actions h-5 justify-end grow-0">
          <a
            target="_blank"
            href={`https://www.google.com/search?q=${book.title} - ${book.ISBN}`}
            className="btn btn-default btn-sm "
          >
            <LinkIcon className="size-4 text-blue-400" />
            <small>Ver mas</small>
          </a>
          <button
            className="btn btn-default btn-sm z-1"
            onClick={toogleFavorite}
          >
            <HeartIcon
              className={clsx('size-4', {
                'text-red-400': isFavorite,
              })}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
