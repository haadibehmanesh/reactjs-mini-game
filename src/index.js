import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import App from './App';
import MyProvider from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
    <App />
  </MyProvider>

);

