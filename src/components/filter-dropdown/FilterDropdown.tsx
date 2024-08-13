import React from 'react';

interface IProps {
  options: {
    genres: Set<string>;
    authors: Set<string>;
  };
  selectedAuthor: string;
  selectedGenre: string;
  onSelectedGenre: (genre: string) => void;
  onSelectedAuthor: (genre: string) => void;
}

const FilterDropdown: React.FunctionComponent<IProps> = ({
  options,
  selectedGenre,
  onSelectedGenre,
  selectedAuthor,
  onSelectedAuthor,
}) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-outline m-1 mt-9">
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
      <div
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow"
      >
        <div className="m-2">
          <span className="max-w-xs ">
            <label className="block mb-2 text-sm font-medium" htmlFor="genre">
              Genero
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedGenre}
              onChange={(e) => onSelectedGenre(e.target.value)}
              name="genre"
              id="genre"
              defaultValue={'Todos'}
            >
              {Array.from(options.genres).map((genre) => (
                <option value={genre} key={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </span>
          <span className="max-w-xs">
            <label
              className="block mb-2 text-sm font-medium mt-2"
              htmlFor="name"
            >
              Autor
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="author"
              id="author"
              value={selectedAuthor}
              onChange={(e) => onSelectedAuthor(e.target.value)}
            >
              {Array.from(options.authors).map((author) => (
                <option value={author} key={author}>
                  {author}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
