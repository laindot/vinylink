import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './navigation/index';
import store from './store/index';

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
