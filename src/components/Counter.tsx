import { useState } from "react";

const Counter = () => {
  const [counterValue, setIsCounterValue] = useState(0);

  const increment = () => {
    setIsCounterValue(counterValue + 1);
  };
  const decrement = () => {
    setIsCounterValue(counterValue - 1);
  };
  const reset = () => {
    setIsCounterValue(0);
  };

  return (
    <section className="mb-10 flex flex-col">
      <h2 className="text-xl">Coun is</h2>
      <p className="text-xl">{counterValue}</p>
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={increment}>+ increment</button>
        <button onClick={decrement}>- Decrement</button>
      </div>
      <div className="flex justify-center">
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
