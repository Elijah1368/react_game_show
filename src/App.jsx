import "./App.css";
import { useEffect, useMemo, useState } from "react";
import GameTimer from "./components/GameTimer";
import GameTrivia from "./components/GameTrivia";

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which of these company is not part of FAANG?",
      triviaAnswers: [
        {
          text: "Amazon",
          correct: false,
        },
        {
          text: "Nintendo",
          correct: true,
        },
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Facebook",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who founded amazon",
      triviaAnswers: [
        {
          text: "Jeff Bezos",
          correct: true,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Steve Jobs",
          correct: false,
        },
        {
          text: "Derrick Lewis",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who did Will Smith slap during the Grammy 2022 awards?",
      triviaAnswers: [
        {
          text: "Chris henson",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Chris Rock",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who did Will Smith slap during the Grammy 2022 awards?",
      triviaAnswers: [
        {
          text: "Chris henson",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Chris Rock",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "What is 1 + 1?",
      triviaAnswers: [
        {
          text: "3",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "0",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which goes in the bowl first?",
      triviaAnswers: [
        {
          text: "Cereal",
          correct: true,
        },
        {
          text: "Milk",
          correct: false,
        },
        {
          text: "Hotdog",
          correct: false,
        },
        {
          text: "Deez Nuts",
          correct: false,
        },

      ],
    },
    {
      id: 7,
      question: "Estuyjhxcvjhdalfajweoiqklahsd?",
      triviaAnswers: [
        {
          text: "sdfsdfsd",
          correct: true,
        },
        {
          text: "dfgdfgdf",
          correct: true,
        },
        {
          text: "sdfsdfsdf",
          correct: true,
        },
        {
          text: "sdfsdf",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Who did Will Smith slap during the Grammy 2022 awards?",
      triviaAnswers: [
        {
          text: "Chris henson",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Chris Rock",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Who did Will Smith slap during the Grammy 2022 awards?",
      triviaAnswers: [
        {
          text: "Chris henson",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Chris Rock",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Who did Will Smith slap during the Grammy 2022 awards?",
      triviaAnswers: [
        {
          text: "Chris henson",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Chris Rock",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$1" },
        { id: 2, amount: "$2" },
        { id: 3, amount: "$3" },
        { id: 4, amount: "$4" },
        { id: 5, amount: "$5" },
        { id: 6, amount: "$6" },
        { id: 7, amount: "$7" },
        { id: 8, amount: "$8" },
        { id: 9, amount: "$9" },
        { id: 10, amount: "$10" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="gameTimer">
                    <GameTimer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <GameTrivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}

          </div>
          <div className="pyramid">
            <ul className="groupMoney">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "groupMoneyItem active"
                      : "groupMoneyItem"
                  }
                >
                  <span className="groupMoneyItemNumber">{m.id}</span>
                  <span className="groupMoneyItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
    </div>
  );
}

export default App;
