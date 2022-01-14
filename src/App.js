import { useEffect, useState } from "react";
import Login from "./components/Login";
import Questions from "./components/Questions";
import History from "./History";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scoreList, setScoreList] = useState([]);
  const [shouldPlayGame, setShouldPlayGame] = useState(false);
  const [shouldShowHistory, setShouldShowHistory] = useState(false);
  useEffect(() => {
    const scorelist = localStorage.getItem("scorelist");
    if (scorelist == null) {
      let arr = [];
      localStorage.setItem("scorelist", JSON.stringify(arr));
    }
  }, []);
  if (shouldPlayGame) {
    return (
      <Questions
        scoreList={scoreList}
        setScoreList={setScoreList}
        setShouldPlayGame={setShouldPlayGame}
      />
    );
  }
  if (shouldShowHistory) {
    return (
      <History
        scoreList={scoreList}
        setShouldShowHistory={setShouldShowHistory}
      />
    );
  }
  return (
    <div
      className="App"
      style={{
        padding: "2rem",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      {isLoggedIn ? (
        <>
          <div className="" style={{}}>
            <button
              onClick={() => {
                setShouldPlayGame(true);
              }}
              className="button"
            >
              Start a new Game?
            </button>
          </div>
          <div >
            <button
            className="button"
              onClick={(e) => {
                setShouldShowHistory(true);
              }}
            >
              Show History
            </button>
          </div>
        </>
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
