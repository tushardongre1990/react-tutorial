import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>Slow counter?!?</h1>
  //     <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
  //     <SlowComponent />
  //     {/* Each time we clic the buttom, state updates and entire Test component needs to get rerendered.
  //     So  SlowComponent gets rerendered each tie the button is clicked, even though SlowComponent is not dependent on state
  //     */}
  //   </div>
  // );
  return (
    <div>
      <Counter>
        <SlowComponent />
        {/*IN this  SlowComponent doesn't rerender because SlowComponent is passed as children prop.
        Meaing SlowComponent is already created before Counter component is rerendered so  SlowComponent isn't affected by the state changes in the Counter component
         */}
      </Counter>
    </div>
  );
}
