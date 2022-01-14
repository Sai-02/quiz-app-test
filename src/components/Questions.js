import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ scoreList, setScoreList, setShouldPlayGame }) => {
  const [questionList, setQuestionList] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.data)
      .then((res) => {
        setQuestionList(res.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    if (questionIndex == "5") {
      alert("Score is " + currentScore);
      setScoreList([...scoreList, currentScore]);
      const scorelist = JSON.parse(localStorage.getItem("scorelist"));
      scorelist.push(currentScore);
      localStorage.setItem("scorelist", JSON.stringify(scorelist));
      setTimeout(() => {
        setShouldPlayGame(false);
      }, 1000);
    }
  }, [questionIndex]);
  return (
    <div className="" style={{
        padding:"2rem 3rem"
    }}>
      <h1 className="" style={{
          marginBottom:"3rem"
      }}>Questions</h1>
      {questionList.map((singleQuestion, index) => {
        if (questionIndex === index) {
          return (
            <SingleQuestion
              question={singleQuestion}
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              key={index}
            />
          );
        }
      })}
      {questionIndex == 5 ? <p>Score is {currentScore}</p> : ""}
    </div>
  );
};

export default Questions;
