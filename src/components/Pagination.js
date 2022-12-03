import React from "react";

export default function Pagination({ page, setPage, pagesMax, setOffset }) {
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  return (
    <div>
      <div className="w-52 max-w-xs flex justify-around  items-center space-x-4 mx-auto ">
        {page !== 1 ? (
          <button
            onClick={prevPage}
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Prev
          </button>
        ) : (
          ""
        )}

        <div className="flex justify-around my-8">
          <p className="mx-3">{page}</p>
          <p className="mx-3"> / </p>
          <p className="mx-3">{page === pagesMax ? pagesMax : 7}</p>
        </div>

        {page !== pagesMax ? (
          <button
            onClick={nextPage}
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
