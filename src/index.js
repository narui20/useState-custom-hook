import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setCurrentIndex } from './custom-hooks/useState';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const reRender = () => {
  setCurrentIndex(-1);
  root.render(
    <App />
);
}

reRender();

