import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState([]);

  function getMovies() {
    axios
      .get("https://demo-server-production.up.railway.app/api/movies")
      .then((res) => setApiData(res.data));
  }

  useEffect(getMovies, []);

  return (
    <>
      {apiData.map((data, i) => {
        return <pre key={i}>{JSON.stringify(data.title, null, 2)}</pre>;
      })}
    </>
  );
}

export default App;
