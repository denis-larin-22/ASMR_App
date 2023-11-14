import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './core/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Root />
    </ReduxProvider>
  </React.StrictMode>
);
