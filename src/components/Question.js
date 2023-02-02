import Answer from "./Answer";

const Question = () => {
  return (
    <div>
      <div className="question">Text of the question</div>
      <div className="answers"></div>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </div>
  );
};

export default Question;
