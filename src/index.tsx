import * as React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

declare const module: any;

render(<Root />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = require('./containers/Root').default;
    render(<Root />, document.getElementById('root'));
  });
}
