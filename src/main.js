import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/styles.css';
import './styles/react-forms.css';

if (typeof window !== 'undefined') {
  window.process = window.process || { env: { NODE_ENV: 'production' } };
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(React.createElement(App));
}
