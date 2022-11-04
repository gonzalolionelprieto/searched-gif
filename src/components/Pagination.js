import React from "react";
import { useState } from "react";

export default function Pagination({ page, setPage, pagesMax }) {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setPage(page + 1);
  };

  const prevPage = () => {
    setInput(input - 1);
    setPage(page - 1);
  };
  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevPage}
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Prev
          </button>
         <p>{input}</p>
          <p>/ de {pagesMax} </p>
          <button
            onClick={nextPage}
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
