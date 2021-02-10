import React, { Component, useState } from "react";
import { getLateBoundPropertyNames } from "tsutils";
import "../css/App.css";
import data from "../sample_data.json";

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
  let [questionNum, setQuestionNum] = useState(0);
  let [viewAnswer, setViewAnswer] = useState(false);
  return (
    <div className="app">
      {data.map((displayQuestion, indexOfQuestionTheLoopIsOnNow) => {
        console.log(displayQuestion);
        /**
         * indexOfQuestionTheLoopIsOnNow = 0 // false
         * indexOfQuestionTheLoopIsOnNow = 1 // true
         * indexOfQuestionTheLoopIsOnNow = 2 // false
         * indexOfQuestionTheLoopIsOnNow === questionNum ? (
         *   <div>Example</div>
         * ) : null;
         */
        return indexOfQuestionTheLoopIsOnNow === questionNum ? (
          <div>
            <Question question={displayQuestion.question} />
            {displayQuestion.question.choices.map((answer) => (
              <Answer answer={answer} />
            ))}
            <button onClick={() => setViewAnswer(!viewAnswer)}>
              {" "}
              view answer{" "}
            </button>
            <NextQuestion
              handleClick={() => {
                setQuestionNum(questionNum + 1);
                // change the view answer state back to its default here
              }}
            />
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
        ) : null;
      })}
    </div>
  );
}
/*() => setViewAnswer(!viewAnswer) */
export default App;
