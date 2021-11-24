import { useState } from "react";

const Muka = () => {
  const example = [
    {
      id: 1,
      name: "Farid",
      test: {
        one: {
          two: 2,
        },
      },
    },
    {
      id: 2,
      name: "Mior",
    },
    {
      id: 3,
      name: "Yepul",
    },
  ];

  const [counter, setCounter] = useState(() => 0);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCounter((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  return (
    <div className="container min-h-screen justify-center w-screen flex align-middle">
      <div className="rounded-md border-2 h-content w-1/4 border-black">
        <h1 className="text-8xl text-black">{counter}</h1>
        <div className="flex justify-center">
          <button onClick={handleIncrement} className="border-8">
            increment
          </button>
          <button onClick={handleDecrement} className="border-8">
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Muka;
