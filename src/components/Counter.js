import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/actions";
import { INCREMENT } from "../redux/actionTypes";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  console.log(count)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const resetHandler = () => {
    dispatch(reset());
  };


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
