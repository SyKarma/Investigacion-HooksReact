import CounterButtons from './counterbuttons';

const Counter = ({ count, dispatch }) => {
  return (
    <div className="counter-container">
      <h2>Current Count: {count}</h2>
      <CounterButtons dispatch={dispatch} />
    </div>
  );
};

export default Counter;