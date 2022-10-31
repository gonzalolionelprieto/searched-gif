import { useState } from 'react';
import './App.css';
import { DisplayGifts } from './components/DisplayGifts';
import { Searched } from './components/Searched';


function App() {
  const [category, setCategory] = useState("")  
  
  const url = `https://api.giphy.com/v1/gifs/search?api_key=LVfg2lM5OSVfa2RvALH7cMw54DPeWENr&q=${category}&limit=20&offset=&rating=g&lang=en`;

  return (
    <div className="App">
      <header className="App-header">
      <h1>Gif Searched</h1>
      <Searched setCategory={setCategory} />
      </header>
      <main>
       <DisplayGifts category={category} url={url} />
      </main>
    </div>
  );
}

export default App;
