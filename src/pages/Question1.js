import { useState } from "react";
import "./question1.css";

function Question1() {
  const [numberInput, setNumberInput] = useState("");
  const [calculationMode, setCalculationMode] = useState("isPrime");

  const handleSetNumberInput = (input) => {
    //If user enter negative values, replace it with 1.
    if (input[0] === "-") return setNumberInput("1");

    setNumberInput(input);
  };

  const calculateIsPrime = () => {
    let num = parseInt(numberInput);
    if (num === NaN) num = 0;

    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  const calculateIsFibonacci = () => {
    let num = parseInt(numberInput);
    if (num === NaN) num = 0;

    let a = 0;
    let b = 1;
    if (num == a || num == b) return true;
    let c = a + b;
    while (c <= num) {
      if (c == num) return true;
      a = b;
      b = c;
      c = a + b;
    }
    return false;
  };

  const handleGetAnswer = () => {
    if (calculationMode === "isPrime") return calculateIsPrime();
    if (calculationMode === "isFibonacci") return calculateIsFibonacci();
  };

  return (
    <div className="container">
      <div className="firstColumn">
        <input
          type="number"
          value={numberInput}
          onChange={(e) => handleSetNumberInput(e.target.value)}
        />
      </div>
      <div className="secondColumn">
        <select
          value={calculationMode}
          onChange={(e) => {
            setCalculationMode(e.target.value);
          }}
        >
          <option>isPrime</option>
          <option>isFibonacci</option>
        </select>
      </div>
      <div className="thirdColumn">{handleGetAnswer().toString()}</div>
    </div>
  );
}

export default Question1;
