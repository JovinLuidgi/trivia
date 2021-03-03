import React, { Component, useState } from "react";

function NextQuestion(props) {
  return <button onClick={props.handleClick}> next question </button>;
}

export default NextQuestion;
