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
    <div className='result-wrapper'>
      <h1>{user.username} 님 환영합니다!</h1>
      <div>
        <p>회원가입이 완료 되었습니다.</p>
        <p>
          <span>지금부터 <code>{user.email}</code>로 로그인하여 서비스를 이용하실 수 있어요.</span>
        </p>
        <div className='button-wrapper'>
          <Link className='button' to='/'>로그인하기</Link>
          <Link className='button secondary' to='/'>메인으로</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupResult;
