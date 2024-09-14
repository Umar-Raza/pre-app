import { useState } from "react";
import Button from "@mui/material/Button";
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
        <Button variant="outlined" onClick={increment}>
          + increment
        </Button>
        <Button variant="outlined" onClick={decrement}>
          - Decrement
        </Button>
      </div>
      <div className="flex justify-center">
        <Button variant="outlined" color="error" onClick={reset}>
          Reset
        </Button>
      </div>
    </section>
  );
};

export default Counter;
