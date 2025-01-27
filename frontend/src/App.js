import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import BookList from './components/BookList';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>My Book List</h1>
      {!loggedIn ? (
        <>
          <RegisterForm />
          <hr />
          <LoginForm onLogin={handleLoginSuccess} />
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <hr />
          <BookList />
        </>
      )}
    </div>
  );
}

export default App;
