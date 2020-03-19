import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const [image, setimages] = useState([]);

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=6cODF9iZMk6W5OAjZSXJBp2aTsjYTdMddz8NMvXM`)
    .then(response => {
      console.log(response)
      setImage(response.data.image);
    })
    .catch(error => {
      console.log("no pictures", error);
    });
}, []);

export default App;
