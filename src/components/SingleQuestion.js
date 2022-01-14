import React, { useState } from "react";
const SingleQuestion = ({
  question,
  questionIndex,
  setQuestionIndex,
  currentScore,
  setCurrentScore,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div>
      <p
        style={{
          fontSize: "1rem",
          marginBottom: "0.7rem",
        }}
      >
        Question {questionIndex + 1}
      </p>
      <p
        style={{
          fontSize: "1.3rem",
          marginBottom: "1 rem",
        }}
      >
        {question.question}
      </p>
      <select
        className=""
        size="4"
        style={{
          overflow: "auto",
          padding: "0.5rem 1rem",
          display: "grid",
          gap: "1rem",
          marginBottom: "2rem",
        }}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      >
        {question.incorrect_answers.map((ans, index) => {
          return (
            <option
              className=""
              key={index}
              value={ans}
              style={{
                fontSize: "1rem",
                padding: "0.2rem",
                cursor: "pointer",
              }}
            >
              {ans}
            </option>
          );
        })}
        <option
          className=""
          value={question.correct_answer}
          style={{
            fontSize: "1rem",
            padding: "0.2rem",
            cursor: "pointer",
          }}
        >
          {question.correct_answer}
        </option>
      </select>
      <div className="">
        <button
          onClick={() => {
            if (selectedValue === "") {
              alert("Select a option");
              return;
            }
            if (selectedValue === question.correct_answer) {
              setCurrentScore(currentScore + 1);
            }
            if (questionIndex <= 4) {
              setQuestionIndex(questionIndex + 1);
            }
          }}
          style={{
            background: "transparent",
            padding: "0.5rem",
            width: "5rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SingleQuestion;
