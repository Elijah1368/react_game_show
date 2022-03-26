import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);


  const moneyPyramid = [
    {id: 1, amount:"$ 100"},
    {id: 2, amount:"$ 100"},
    {id: 3, amount:"$ 100"},
    {id: 4, amount:"$ 100"},
    {id: 5, amount:"$ 100"},
    {id: 6, amount:"$ 100"},
    {id: 7, amount:"$ 100"},
    {id: 8, amount:"$ 100"},
    {id: 9, amount:"$ 100"},
    {id: 10, amount:"$ 100"},
    {id: 12, amount:"$ 100"},
    {id: 13, amount:"$ 100"},
    {id: 14, amount:"$ 100"},
    {id: 15, amount:"$ 100"},
  ].reverse();
  
  
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia
            data={data}
            setTimeOut={questionNumber}
            questionNumber={questionNumber}
            setQuestionNumbe={setQuestionNumber}
          />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
          <li className ={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
