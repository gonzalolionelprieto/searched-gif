import React from "react";
import { useState } from "react";

function Searched({ setCategory }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const searchGif = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    setError(false);
    setCategory(value);
    setValue("");
  };

  return (
    <>
      <div className="my-5">
        <form onSubmit={searchGif}>
          <input
            type="text"
            placeholder="Search GIPHY"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="text-black"
          />
        </form>
        {error ? <p className="error">El campo no puede estar vacio...</p> : ""}
      </div>
    </>
  );
}

export { Searched };
