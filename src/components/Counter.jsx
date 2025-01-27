import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';
import './Counter.css';

const Counter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
