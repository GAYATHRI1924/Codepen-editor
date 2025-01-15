import 'codemirror/lib/codemirror.css';  // CodeMirror base styles
import 'codemirror/theme/material.css';   // Material theme styles (if you're using it)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Editor from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
