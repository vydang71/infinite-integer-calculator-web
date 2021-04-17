import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  classnames: string;
}

const CalcButton: FC<Props> = ({ children, classnames }: Props) => {
  return (
    <button type="button" className={`btn w-100 mb-3 ${classnames}`}>
      {children}
    </button>
  );
};

export default CalcButton;
