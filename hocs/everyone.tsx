import React, { ReactNode } from "react";
import { NextComponentType } from "next";
import Head from "next/head";
import Image from "next/image";
import { CustomNextPageContext } from "./types";

interface EveryoneWrapperProps {
  pageProps?: object;
}

export const everyone = (Content: NextComponentType): ReactNode => {
  const EveryoneWrapper: NextComponentType<
    CustomNextPageContext,
    {},
    EveryoneWrapperProps
  > = ({ pageProps }: EveryoneWrapperProps) => {
    const headerMenu = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <Image src="/static/icons/favicon.png" width="30" height="30" />
              <a className="navbar-brand ml-2" href="#">
                Calculator
              </a>
            </div>

            <div className="d-flex align-items-center">
              <div className="mr-2">Hi, Vy!</div>
              <Image
                src="/static/images/default-avatar.png"
                width="30"
                height="30"
              />
            </div>
          </div>
        </nav>
      );
    };

    return (
      <div>
        <Head>
          <title>Infinite Integer calculator</title>
        </Head>
        {headerMenu()}
        <Content {...pageProps} />
      </div>
    );
  };

  EveryoneWrapper.getInitialProps = async (
    ctx: CustomNextPageContext
  ): Promise<object> => {
    return {
      pageProps: Content.getInitialProps
        ? await Content.getInitialProps(ctx)
        : {},
    };
  };

  return EveryoneWrapper;
};
