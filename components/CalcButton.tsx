import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  classnames: string;
  content: string | JSX.Element;
  setCalculation: Function;
}

const CalcButton: FC<Props> = ({
  children,
  classnames,
  content,
  setCalculation,
}: Props) => {
  const handleClickCalcButton = (item: string | JSX.Element) => {
    setCalculation(item);
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
