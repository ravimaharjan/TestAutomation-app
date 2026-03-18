import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LoginPage from './components/LoginPage.jsx';
import { Toaster } from 'sonner';
import MainApp from './MainApp.jsx';


const LOGIN_STORAGE_KEY = 'testmanager_logged_in';

function isLoggedIn() {
  return sessionStorage.getItem(LOGIN_STORAGE_KEY) === 'true';
}


function ToastContainer() {
  const container = typeof document !== 'undefined' ? document.getElementById('success_toaster') : null;
  if (!container) return null;
  return createPortal(<Toaster richColors position="top-center" />, container);
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  function handleLogin() {
    sessionStorage.setItem(LOGIN_STORAGE_KEY, 'true');
    setLoggedIn(true);
  }

  function handleLogout() {
    sessionStorage.removeItem(LOGIN_STORAGE_KEY);
    setLoggedIn(false);
  }

  // Show app by default so plan/test page can be tested without login
  // useEffect(() => {
  //   if (!isLoggedIn()) {
  //     sessionStorage.setItem(LOGIN_STORAGE_KEY, 'true');
  //     setLoggedIn(true);
  //   }
  // }, []);

  if (!loggedIn) {
    return (
      <div id="login-page" className="page">
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }
  return (
    <>
      <div id="app">
        <MainApp onLogout={handleLogout} />
      </div>
      <ToastContainer />
    </>
  );
}
