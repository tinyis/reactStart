import logo from './logo.svg';
import React from "react";
import './App.css';

function Greeting1(){

  return (
    <h1>Hello, React!</h1>
  )
}

function Greeting2(){

  return (
      React.createElement("p", null, "Hello, React")
  )
}

function MyInformation(){

  let fio="Zemtsova Valeria Sergeevna";
  let tel="+380962531434";
  let email="tinyis97@gmail.com";

  return(
    <div>
    <p>FIO: {fio}</p>
    <p>Telephone: {tel}</p>
    <p>Email: {email}</p>
    </div>
  )
}

function MyCity(){

  let city="Krivoy Rog";
  let country="Ukraine";
  let year = 1775;
  let photoes=["./images/unnamed.jpg", "./images/1543919169.jpg"];

  return (

    <div>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Year: {year}</p>
      <img src={photoes[0]}/>
      <img src={photoes[1]}/>
    </div>
  )

}

function App() {
  return (
    <div className="App">
        <Greeting1/>
        <Greeting2/>
        <MyInformation/>
        <MyCity/>
    </div>
  );
}

export default App;
