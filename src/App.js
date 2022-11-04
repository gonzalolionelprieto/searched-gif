import { useState } from "react";
import "./App.css";
import { DisplayGifts } from "./components/DisplayGifts";
import { Searched } from "./components/Searched";

function App() {
  const [category, setCategory] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=LVfg2lM5OSVfa2RvALH7cMw54DPeWENr&q=${category}&limit=2000&offset=&rating=g&lang=en`;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl my-4 uppercase">Gif Searched</h1>
        <Searched setCategory={setCategory} />
      </header>
      <main>
        <DisplayGifts category={category} url={url} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
      </main>
    </div>
  );
}

export default App;
