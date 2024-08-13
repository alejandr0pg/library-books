import React from 'react';

const EmptyBooks: React.FunctionComponent = () => {
  return (
    <div className="flex py-16  place-items-center flex-col w-full m-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-20 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span className="mt-5 text-xl">No hay ningun libro</span>
    </div>
  );
};

export default EmptyBooks;
