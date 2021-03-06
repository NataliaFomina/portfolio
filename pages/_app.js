import App from 'next/app';
import React from 'react';
import '../styles/index.scss';

export default class Portfolio extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}
