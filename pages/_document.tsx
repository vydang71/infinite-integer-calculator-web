import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/png" href="/static/icons/favicon.png" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
