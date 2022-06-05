import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types/user.type';

const SignupResult = ({ user }: { user: User | null }) => {
  const navigate = useNavigate();
  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <>
      <h1>{user.username} 님 환영합니다!</h1>
      <div>
        <p>회원가입이 완료되었습니다.</p>
        <p>
          <span>{user.email}</span>
        </p>
        <Link to='/'>메인으로</Link>
      </div>
    </>
  );
};

export default SignupResult;
