import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./components/NasaCard"



function App() {

  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=6cODF9iZMk6W5OAjZSXJBp2aTsjYTdMddz8NMvXM`)
      .then(response => {
        console.log(response)
        setImage(response.data);
      })
      .catch(error => {
        console.log("no pictures", error);
      });
  }, []);

  return (
    <div className="App">
      <NasaCard title = {image.title} explanation = {image.explanation} hdurl = {image.hdurl}/>
      
    </div>
  )
}



export default App;

