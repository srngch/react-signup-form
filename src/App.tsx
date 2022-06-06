import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignupForm from './pages/SignupForm';
import SignupResult from './pages/SignupResult';
import './assets/styles/App.css';
import { User } from './types/user.type';

function App() {
  const mockUsers: User[] = [
    {
      id: 1,
      email: 'test@mail.com',
      phone: '01012345678',
      username: 'test',
      referralUserId: null,
      isTermsAgree: true,
      isPrivacyAgree: true,
      isMarketingAgree: true,
      createdAt: new Date('2022-05-31T00:00:00.000Z'),
      updatedAt: null,
    },
    {
      id: 2,
      email: 'dummy@mail.com',
      phone: '01011112222',
      username: 'dummy',
      referralUserId: 1,
      isTermsAgree: true,
      isPrivacyAgree: true,
      isMarketingAgree: false,
      createdAt: new Date('2022-05-31T00:00:00.000Z'),
      updatedAt: null,
    },
  ];

  const [users, setUsers] = useState(mockUsers);
  const [user, setUser] = useState<User | null>(null);

  console.log('mockUsers');
  console.table(users);

  const handleSignup = (user: User) => {
    setUser(user);
    setUsers([...users, user]);
  };

  return (
    <div className='App'>
      <header className='app-header'>
        <div className='app-header-wrapper'>
          <div className='app-header-left'>
            <a href='/'>
              <div className='app-header-logo'>🧰</div>
              <span className='app-header-name'>Ruth</span>
            </a>
          </div>
          <div className="app-header-right">
            <div className="burger-menu">
              <div className="burger-menu-line"></div>
              <div className="burger-menu-line"></div>
              <div className="burger-menu-line"></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-wrapper">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<SignupForm users={mockUsers} handleSignup={handleSignup}/>} />
              <Route path='/signup-result' element={<SignupResult user={user}/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
