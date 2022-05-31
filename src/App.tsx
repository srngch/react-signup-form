import React from 'react';
import SignUpForm from './pages/SignupForm';
import './assets/styles/App.css';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div>🧰</div>
        <span>Ruth</span>
      </header>
      <main>
        <SignUpForm />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
