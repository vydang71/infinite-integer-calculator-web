import React, { FC, useState } from "react";
import Head from "next/head";
import CalcButton from "../components/CalcButton";
import { everyone } from "../hocs/everyone";

enum ColorType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LIGHT = "light",
}

interface CalcButtonItem {
  content: string;
  color: ColorType;
  handleClick?: Function;
}

const calcButtons: Array<CalcButtonItem> = [
  { content: "÷", color: ColorType.SECONDARY },
  { content: "7", color: ColorType.LIGHT },
  { content: "8", color: ColorType.LIGHT },
  { content: "9", color: ColorType.LIGHT },
  { content: "×", color: ColorType.SECONDARY },
  { content: "4", color: ColorType.LIGHT },
  { content: "5", color: ColorType.LIGHT },
  { content: "6", color: ColorType.LIGHT },
  { content: "−", color: ColorType.SECONDARY },
  { content: "1", color: ColorType.LIGHT },
  { content: "2", color: ColorType.LIGHT },
  { content: "3", color: ColorType.LIGHT },
  { content: "+", color: ColorType.SECONDARY },
  { content: "0", color: ColorType.LIGHT },
  { content: "Clear", color: ColorType.SECONDARY },
  { content: "=", color: ColorType.PRIMARY },
];

const IndexPage: FC = () => {
  const [calculation, setCalculation] = useState<string>("");

  return (
    <div>
      <Head>
        <title>Infinite Integer calculator</title>
      </Head>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Infinite Integer Calculator</h1>
        <div className="mx-lg-5 px-lg-5 mx-md-5 px-md-5">
          {/* Input */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <i className="fas fa-history u-cur-pointer" />
                </div>
                <div className="col text-right">Ans = 0</div>
              </div>
              <input
                type="text"
                placeholder="0"
                className="w-100 text-right border-0 h2 mb-0"
                value={calculation}
                onChange={(e) => setCalculation(e.target.value)}
              />
            </div>
          </div>

          {/* Button */}
          <div className="row">
            {calcButtons.map(
              (button: CalcButtonItem, index: number): JSX.Element => (
                <div key={`calc-button-${index}`} className="col-3">
                  <CalcButton
                    classnames={`app-btn--${button.color}`}
                    content={button.content}
                    originCalculation={calculation}
                    setCalculation={setCalculation}
                  >
                    {button.content}
                  </CalcButton>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default everyone(IndexPage);
