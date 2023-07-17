import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'

const rootElement = document.getElementById('root') as Element;
const app = <App />;

const root = ReactDOM.createRoot(rootElement);
root.render(app);
