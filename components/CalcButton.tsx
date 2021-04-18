import React, { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  classnames: string;
  content: string;
  originCalculation: string;
  setCalculation: Function;
}

const CalcButton: FC<Props> = ({
  children,
  classnames,
  content,
  originCalculation,
  setCalculation,
}: Props) => {
  const handleClickCalcButton = (item: string) => {
    switch (item) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        setCalculation(originCalculation + item);
        break;

      case "÷":
      case "×":
      case "−":
      case "+":
        setCalculation(originCalculation + " " + item + " ");
        break;

      case "=":
        console.log("tinh nha");
        break;

      // Clear element
      default:
        if (originCalculation.slice(-1) === " ")
          setCalculation(originCalculation.slice(0, -2));
        else setCalculation(originCalculation.slice(0, -1));
        break;
    }
  };

  return (
    <button
      type="button"
      className={`btn w-100 mb-3 ${classnames}`}
      onClick={() => handleClickCalcButton(content)}
    >
      {children}
    </button>
  );
};

export default CalcButton;
