import React, { Component, useState } from "react";
import data from "../sample_data.json";
import Image from "./Image";
import Answer from "./Answer";

function CorrectAnswer(props) {
  return <Image cname={props.answer} />;
}

export default CorrectAnswer;
