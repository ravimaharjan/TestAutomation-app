import React, { useState, useEffect } from 'react';
import TestView from './components/TestView.jsx';
import Form2Shadcn from './components/Form2Shadcn.jsx';
import Form3Formik from './components/Form3Formik.jsx';

const LOGIN_STORAGE_KEY = 'testmanager_logged_in';

function getSegment() {
  const rawHash = window.location.hash || '#/home';
  const hash = rawHash.slice(1).replace(/^#/, '');
  return (hash.split('/').filter(Boolean)[0]) || 'home';
}

export default function MainApp({ onLogout }) {
  const [segment, setSegment] = useState(getSegment);

  useEffect(() => {
    function onHashChange() {
      setSegment(getSegment());
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function handleLogout() {
    sessionStorage.removeItem(LOGIN_STORAGE_KEY);
    window.location.hash = '';
    onLogout();
  }

  const viewId = segment;
  const isActive = (id) => viewId === id;

  return (
    <>
      <header className="nav-header">
        <a href="#/home" className="logo">Test Manager</a>
        <nav>
          <a href="#/test" className={`nav-link ${isActive('test') ? 'active' : ''}`}>Create Test1</a>
          <a href="#/test2" className={`nav-link ${isActive('test2') ? 'active' : ''}`}>Create Test2</a>
          <a href="#/test3" className={`nav-link ${isActive('test3') ? 'active' : ''}`}>Create Test3</a>
          <button type="button" id="logout-btn" className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      <main id="main-content">
        {viewId === 'home' && (
          <div className="view">
            <h2>Home</h2>
            <p>Use the menu above to go to Test or Participant.</p>
          </div>
        )}
        {viewId === 'test' && <TestView />}
        {viewId === 'test2' && (
          <div className="view">

            <Form2Shadcn />
          </div>
        )}
        {viewId === 'test3' && (
          <div className="view">

            <Form3Formik />
          </div>
        )}
      </main>
    </>
  );
}
