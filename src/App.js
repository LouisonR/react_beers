import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(setBeers);
  }, []);

  return (
    <ul>
      {beers.map(beer => (
        <li key={beer.id}>{beer.name}</li>
      ))}
    </ul>
  );
}
export default App;