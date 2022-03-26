import React, { useEffect } from 'react'

export default function Trivia({
    data,
    setTimeout, 
    questionNumber, 
    setQuestionNumber
}) {

    const [question, setQuestion] = useState(null);
    useEffect(()=> {
    }, []);
  return (
    <div className="trivia">
        <div className="question">blah blah</div>
        <div className="answers">
            <div className="answer correct">test</div>
            <div className="answer">test</div>
            <div className="answer">test</div>
            <div className="answer">test</div>
        </div>
    </div>
  )
}
