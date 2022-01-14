import React from "react";

const History = ({ scoreList, setShouldShowHistory }) => {
  const scorelist = JSON.parse(localStorage.getItem("scorelist"));
  return (
    <div
      style={{
        padding: "2rem",
        display: "grid",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "3rem",
        }}
      >
        Previous Scores of User
      </h1>
      <div className="">
        {scorelist.map((score, index) => {
          return <p key={index}>{score}</p>;
        })}
      </div>
      <div
        className=""
        style={{
          width: "100%",
          marginTop: "3rem",
        }}
      >
        <button
          onClick={(e) => {
            setShouldShowHistory(false);
          }}
          className="button"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default History;
