import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';  
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);