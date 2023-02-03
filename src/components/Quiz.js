import Question from "./Question";
import { useContext, useReducer } from "react";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);
  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/8</div>
        <Question questions={quizState.questions} />
        <div
          className="next-button"
          // dispatch – нужен для изменения состояния
          onClick={() => dispatch({ type: "NEXT_QUESTION" })} // type: "NEXT_QUESTION" – это action
        >
          Next question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
