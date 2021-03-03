import React, { Component, useState } from "react";
import { getLateBoundPropertyNames } from "tsutils";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question";
import NextQuestion from "./Nextquestion";
import Answer from "./Answer";

function App() {
  let [questionNum, setQuestionNum] = useState(0);
  let [viewAnswer, setViewAnswer] = useState(false);
  return (
    <div className="app">
      {data.map((displayQuestion, indexOfQuestionTheLoopIsOnNow) => {
        return indexOfQuestionTheLoopIsOnNow === questionNum ? (
          <div>
            <Question question={displayQuestion.question} />
            {displayQuestion.question.choices.map((answer) => (
              <Answer answer={answer} />
            ))}
            <button onClick={() => setViewAnswer(!viewAnswer)}>
              view answer
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
      {/**
        add a "ternary operator" here that says,
          if the question num is higher than the number of question
          then show a messsage saying we're out of questions

          otherwise show nothing
      */}
    </div>
  );
}
/*() => setViewAnswer(!viewAnswer) */
export default App;
