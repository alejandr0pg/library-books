import React from 'react';

const BookSkeleton: React.FunctionComponent = () => {
  return (
    <div className="card bg-base-100 image-full sm:w-full md:w-80 lg:w-56 shadow-xl max-h-80 z-0 ">
      <div className="skeleton h-80 "></div>
    </div>
  );
};

export default BookSkeleton;
