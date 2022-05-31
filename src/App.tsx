import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignupForm from './pages/SignupForm';
import SignupResult from './pages/SignupResult';
import './assets/styles/App.css';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div>🧰</div>
        <span>Ruth</span>
      </header>
      <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<SignupForm />}/>
          <Route path='/signup-result' element={<SignupResult />}/>
        </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
