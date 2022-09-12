import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { InfoProvider } from './src/provider/info';
import App from '@components/App';
import '@assets/style/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <InfoProvider>
        <App />
      </InfoProvider>
    </Provider>
  </React.StrictMode>
);
