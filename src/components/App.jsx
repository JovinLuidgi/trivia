import React, { Component, useState } from "react";
import { getLateBoundPropertyNames } from "tsutils";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props){
  return <p>{props.question.text}</p>;
  
}

function App() {
  let questionNum = 0;

 return  <div className="app">
           {data.map(displayQuestion => <Question question={displayQuestion.question}/>)} 
          </div>;
  }

export default App;
