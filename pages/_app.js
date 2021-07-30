import App from 'next/app';
import React from 'react';
import '../styles/index.scss';
import '../i18n';

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
