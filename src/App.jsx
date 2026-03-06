import React from 'react';
import { createPortal } from 'react-dom';
import { Toaster } from 'sonner';
import MainApp from './MainApp.jsx';

function ToastContainer() {
  const container = typeof document !== 'undefined' ? document.getElementById('success_toaster') : null;
  if (!container) return null;
  return createPortal(<Toaster richColors position="top-center" />, container);
}

export default function App() {
  return (
    <>
      <div id="app">
        <MainApp />
      </div>
      <ToastContainer />
    </>
  );
}
