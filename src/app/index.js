import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import styles from './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import allReducers from './reducers';
import initialState from './initialState';

const muiTheme = getMuiTheme({
    palette: {
      primary1Color: Colors.blueGrey600,
      primary2Color: Colors.indigo700,
    },
    appBar: {
      height: 60,
      margin: '0px',
    },
});

const store = createStore(allReducers, initialState);

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
