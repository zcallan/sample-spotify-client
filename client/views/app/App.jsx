import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider as ReduxProvider } from 'react-redux';
import { routes } from 'config';
import store from 'store';


const App = () => (
  <ReduxProvider store={store}>
    <Router>
      {renderRoutes( routes )}
    </Router>
  </ReduxProvider>
);

export default App;
