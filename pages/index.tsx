import React, { FC } from "react";
import Head from "next/head";
import CalcButton from "../components/CalcButton";

enum ColorType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LIGHT = "light",
}

interface CalcButtonItem {
  content: string | JSX.Element;
  color?: ColorType;
  onClick?: Function;
}

const calcButtons: Array<CalcButtonItem> = [
  { content: "(", color: ColorType.SECONDARY },
  { content: ")", color: ColorType.SECONDARY },
  { content: "%", color: ColorType.SECONDARY },
  { content: <i className="fas fa-backspace" />, color: ColorType.SECONDARY },
  { content: "7", color: ColorType.LIGHT },
  { content: "8", color: ColorType.LIGHT },
  { content: "9", color: ColorType.LIGHT },
  { content: "÷", color: ColorType.SECONDARY },
  { content: "4", color: ColorType.LIGHT },
  { content: "5", color: ColorType.LIGHT },
  { content: "6", color: ColorType.LIGHT },
  { content: "×", color: ColorType.SECONDARY },
  { content: "1", color: ColorType.LIGHT },
  { content: "2", color: ColorType.LIGHT },
  { content: "3", color: ColorType.LIGHT },
  { content: "−", color: ColorType.SECONDARY },
  { content: "0", color: ColorType.LIGHT },
  { content: ".", color: ColorType.LIGHT },
  { content: "=", color: ColorType.PRIMARY },
  { content: "+", color: ColorType.SECONDARY },
];

const IndexPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Infinite Integer calculator</title>
      </Head>
      <div className="container mt-5">
        <h1 className="text-center">Infinite Integer Calculator</h1>
        <div className="">
          <div className="row">
            {calcButtons.map(
              (button: CalcButtonItem, index: number): JSX.Element => (
                <div key={`calc-button-${index}`} className="col-3">
                  <CalcButton classnames={`app-btn--${button.color}`}>
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

export default IndexPage;
