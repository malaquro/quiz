import { useState } from "react";
import Question from "./Question";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log(currentQuestionIndex);
  return (
    <div className="quiz">
      {currentQuestionIndex}
      <div>
        <div className="score">Question 1/8</div>
        <Question />
        <div
          className="next-button"
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >
          Next question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
