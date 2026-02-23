import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useAutoUTM } from './hooks/useAutoUTM';

// Wrapper component to use the hook
const Root = () => {
    useAutoUTM();
    return <App />;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
