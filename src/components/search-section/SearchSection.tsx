import React from 'react';

interface IProps {
  small?: boolean;
  setSearchTerm: (term: string) => void;
}

const SearchSection: React.FunctionComponent<IProps> = ({
  small = false,
  setSearchTerm,
}) => {
  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          {!small && (
            <>
              <h1 className="text-5xl font-bold">Libros 📖</h1>
              <p className="py-6">
                Todos los libros disponibles para que añadas a tus lista de
                lectura
              </p>
            </>
          )}
          <label className="input input-bordered flex items-center gap-2 min-w-96">
            <input
              type="text"
              className="grow w-96"
              placeholder="Buscar titulos por nombre..."
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
