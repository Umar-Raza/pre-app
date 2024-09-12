import { useState, useEffect } from "react";

const AutoCounter = () => {
  const [counterValue, setIsCounterValue] = useState(0);

  const startCounter = () => {
    const timer = setInterval(() => {
      setIsCounterValue((counterVal) => {
        return counterVal + 1;
      });
      console.log("counterValue updated");
    }, 100);
    return timer;
  };
  const stopCounter = () => {
    setIsCounterValue(counterValue - 1);
  };
  const resetCounter = () => {
    setIsCounterValue(0);
  };

  useEffect(() => {
    const timer = startCounter();
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="mb-10 flex flex-col">
      <h2 className="text-xl">Coun is</h2>
      <p className="text-xl">{counterValue}</p>
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={startCounter}>StartCounter</button>
        <button onClick={stopCounter}>StopCounter</button>
      </div>
      <div className="flex justify-center">
        <button onClick={resetCounter}>ResetCounter</button>
      </div>
    </section>
  );
};

export default AutoCounter;
