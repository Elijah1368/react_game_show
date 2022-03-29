import { useEffect, useState } from "react";
import useSound from "use-sound";
import start from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

export default function GameTrivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(start);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(500, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

      delay(2000, () => {
      if (a.correct) {
        correctAnswer();
        delay(500, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });

      } else {
        wrongAnswer();
        delay(500, () => {
          setTimeOut(true);
        });

      }

      })
  };
  return (
    <div className="GameTrivia">
      <div className="question">{question?.question}</div>
      <div className="triviaAnswers">
        {question?.triviaAnswers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
