import { useState } from "react";
import "./App.css";
import { DisplayGifts } from "./components/DisplayGifts";
import { Searched } from "./components/Searched";

function App() {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [offset, setOffset] = useState(0)
  const url = `https://api.giphy.com/v1/gifs/search?api_key=LVfg2lM5OSVfa2RvALH7cMw54DPeWENr&q=${category}&limit=2000&offset=${offset}&rating=g&lang=en`;

  return (
    <div className="App h-screen">
      <header className="App-header">
        <h1 className="text-4xl my-4 uppercase font-black">Gif Searched</h1>
        <Searched setCategory={setCategory} setPage={setPage}/>
      </header>
      <main>
        <DisplayGifts page={page} setPage={setPage} category={category} url={url} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setOffset={setOffset} />
      </main>
    </div>
  );
}

export default App;