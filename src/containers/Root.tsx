import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import routes from '../routes';

export default class Root extends React.Component<{ store: any }, {}> {
  public render() {
    const { store } = this.props;
    return (
      <AppContainer>
        <Provider store={store}>
          <Router routes={routes} history={browserHistory} />
        </Provider>
      </AppContainer>
    );
  }
}
