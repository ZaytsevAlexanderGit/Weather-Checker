import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
// console.log(import.meta.env.VITE_NODE_ENV);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
