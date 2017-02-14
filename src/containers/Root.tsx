import * as React from 'react';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import routes from '../routes';

export default class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <AppContainer>
        <Router routes={routes} history={browserHistory} />
      </AppContainer>
    );
  }
}
