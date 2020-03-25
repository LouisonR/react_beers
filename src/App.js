import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [pageNumber, setPage] = useState(1)


  useEffect(() => {

    fetch('https://api.punkapi.com/v2/beers?page='+pageNumber)
      .then(response => response.json())
      .then(setBeers);
  }, [pageNumber]);

  const increment = () => { setPage(pageNumber + 1) }
  const decrement = () => {if (pageNumber > 1) {setPage(pageNumber - 1)}}


  return (
    <div>
      <ul>
        {beers.map(beer => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>

      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  );
}


export default App;