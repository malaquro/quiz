import { createContext, useReducer } from "react";

// Наше начальное состояние
const initialState = {
  questions: [],
  currentQuestionIndex: 0,
};

// То как наше состояние будет меняться
const reducer = (state, action) => {
  console.log("reducer", state, action);
  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
