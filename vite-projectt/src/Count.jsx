import useCounter from "./Counter";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
export default Counter;
