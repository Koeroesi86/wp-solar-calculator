import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {IntlProvider} from "react-intl";
import texts from "./texts";

declare global {
  interface Window {
    renderSolarCalculator: (selector: string, configUrl: string, baseUrl: string) => void;
  }
}

if (typeof window !== 'undefined' && !('renderSolarCalculator' in window)) {
  window.renderSolarCalculator = (selector, configUrl, baseUrl) => {
    if (
      !selector
      || !configUrl
      || !baseUrl
      || typeof selector !== 'string'
      || typeof configUrl !== 'string'
      || typeof baseUrl !== 'string'
    ) {
      throw new Error('Missing or invalid parameters');
    }

    render(
      <IntlProvider messages={texts} locale="hu-HU" defaultLocale="hu-HU">
        <App config={configUrl} baseUrl={baseUrl} />
      </IntlProvider>,
      document.querySelector(selector)
    );
  }
}
