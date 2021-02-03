import React, { Component, useState } from "react";
import { getLateBoundPropertyNames } from "tsutils";
import "../css/App.css";
import questions from "../sample_data.json";

function Question(props) {
  return <p>{props.question.text}</p>;
}

function NextQuestion(props) {
  return <button onClick={props.handleClick}> next question </button>;
}

function Answer(props) {
  return <p>{props.answer}</p>;
}

function App() {
  let questionNum = 0;
  let [viewAnswer, setViewAnswer] = useState(false);

  return (
    <div className="app">
      {questions.map((displayQuestion) => (
        <div>
          <Question question={displayQuestion.question} />
          <NextQuestion handleClick={() => setViewAnswer(!viewAnswer)} />
          {viewAnswer && (
            <Answer
              answer={
                displayQuestion.question.choices[
                  displayQuestion.question.correct_choice_index
                ]
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
