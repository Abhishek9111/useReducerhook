import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "Increase") {
    return state + 1;
  } else {
    return state - 1;
  }
  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "Increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "Decrease" })}>Decrease</button>
    </>
  );
};
export default App;
