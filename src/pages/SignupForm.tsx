import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import InputCheckbox from '../components/InputCheckbox';
import {
  validateEmail, validatePhone,
  validatePassword, validateConfirmPassword,
  validateUsername,
  validateReferralUsername
} from '../utils/validation';
import { User } from '../types/user.type';

const normalizePhone = (phone: string) => {
  return phone.replace(/[^0-9]/g, '');
};

const SignUpForm = ({ users, handleSignup }: { users: User[], handleSignup: (user: User) => void }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [referralUsername, setReferralUsername] = useState('');
  const [checkTerms, setCheckTerms] = useState(false);
  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [checkMarketing, setCheckMarketing] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isReferralUsernameValid, setIsReferralUsernameValid] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheckTermsValid, setIsCheckTermsValid] = useState(false);
  const [isCheckPrivacyValid, setIsCheckPrivacyValid] = useState(false);

  const [showAllMessage, setShowAllMessage] = useState(false);

  const validateEveryField = () => {
    const isEmailValid = validateEmail(email);
    setIsEmailValid(isEmailValid);
    const isPhoneValid = validatePhone(normalizePhone(phone));
    setIsPhoneValid(isPhoneValid);
    const isPasswordValid = validatePassword(password);
    setIsPasswordValid(isPasswordValid);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);
    setIsConfirmPasswordValid(isConfirmPasswordValid);
    const isUsernameValid = validateUsername(username);
    setIsUsernameValid(isUsernameValid);
    if (referralUsername) {
      const isReferralUsernameValid = validateReferralUsername(referralUsername);
      setIsReferralUsernameValid(isReferralUsernameValid);
    } else {
      setIsReferralUsernameValid(true);
    }
    const isCheckTermsValid = checkTerms;
    setIsCheckTermsValid(isCheckTermsValid);
    const isCheckPrivacyValid = checkPrivacy;
    setIsCheckPrivacyValid(isCheckPrivacyValid);

    console.table({
      isEmailValid, isPhoneValid, isPasswordValid, isConfirmPasswordValid, isUsernameValid, isReferralUsernameValid, isCheckTermsValid, isCheckPrivacyValid
    })
    return isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid && isUsernameValid && isReferralUsernameValid && isCheckTermsValid && isCheckPrivacyValid;
  }

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowAllMessage(true);
    if (validateEveryField()) {
      console.log('submit');
      const user: User = {
        id: users.length + 1,
        email,
        phone,
        username,
        referralUserId: null,
        isTermsAccepted: checkTerms,
        isPrivacyAccepted: checkPrivacy,
        isMarketingAccepted: checkMarketing,
        createdAt: new Date(),
      };
      handleSignup(user);
      navigate('/signup-result', { state: { user }, replace: true });
    } else {
      console.log('invalid');
    }
    console.table({email, phone, password, confirmPassword, username, referralUsername, checkTerms, checkPrivacy, checkMarketing})
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>회원가입</legend>
        <Input
          name='email'
          label='이메일'
          type='email'
          value={email}
          setValue={setEmail}
          isValid={isEmailValid}
          setIsValid={setIsEmailValid}
          validation={validateEmail}
          validationMessage={{
            required: '이메일을 입력해주세요.',
            format: '올바른 이메일 형식이 아닙니다.',
            duplicated: '이미 사용중인 이메일입니다.'
          }}
          showMessage={showAllMessage}
          isRequired
        />
        <Input
          name='phone'
          label='전화번호'
          type='tel'
          value={phone}
          setValue={setPhone}
          isValid={isPhoneValid}
          setIsValid={setIsPhoneValid}
          validation={validatePhone}
          validationMessage={{
            required: '전화번호를 입력해주세요.',
            format: '올바른 전화번호 형식이 아닙니다.',
            duplicated: '이미 사용중인 전화번호입니다.'
          }}
          helpMessage='예) 01012345678'
          showMessage={showAllMessage}
          isRequired
        />
        <Input
          name='password'
          label='비밀번호'
          type='password'
          value={password}
          setValue={setPassword}
          isValid={isPasswordValid}
          setIsValid={setIsPasswordValid}
          validation={validatePassword}
          validationMessage={{
            required: '비밀번호를 입력해주세요.',
            format: '영문/숫자/특수문자를 모두 포함하여 8자 이상으로 입력해주세요.',
          }}
          showMessage={showAllMessage}
          isRequired
          helpMessage='영문/숫자/특수문자 모두 포함, 8자 이상'
          autoComplete= 'off'
        />
        <Input
          name='confirmPassword'
          label='비밀번호 확인'
          type='password'
          value={confirmPassword}
          setValue={setConfirmPassword}
          isValid={isConfirmPasswordValid}
          setIsValid={setIsConfirmPasswordValid}
          validation={() => validateConfirmPassword(password, confirmPassword)}
          validationMessage={{
            required: '비밀번호를 입력해주세요.',
            format: '비밀번호가 일치하지 않습니다.',
          }}
          showMessage={showAllMessage}
          isRequired
          autoComplete= 'off'
        />
        <Input
          name='username'
          label='사용자명'
          type='text'
          value={username}
          setValue={setUsername}
          isValid={isUsernameValid}
          setIsValid={setIsUsernameValid}
          validation={validateUsername}
          validationMessage={{
            required: '사용자명을 입력해주세요.',
            format: '영문/숫자만 사용하여 3자 이상 15자 이하로 입력해주세요.',
            duplicated: '이미 사용중인 사용자명입니다.'
          }}
          showMessage={showAllMessage}
          helpMessage='영문/숫자만 사용 가능, 3자 이상 15자 이하'
          isRequired
        />
        <Input
          name='referralUsername'
          label='추천인 사용자명'
          type='text'
          value={referralUsername}
          setValue={setReferralUsername}
          isValid={isReferralUsernameValid}
          setIsValid={setIsReferralUsernameValid}
          validation={validateReferralUsername}
          validationMessage={{
            format: '존재하지 않는 추천자명입니다.',
          }}
          showMessage={showAllMessage}
        />
        <InputCheckbox
          id='all'
          name='all'
          label='모두 동의합니다'
          checked={isCheckAll}
          setChecked={setIsCheckAll}
        />
        <InputCheckbox
          id='terms'
          name='terms'
          label={<><a href='#'>이용약관</a>에 동의합니다(필수)</>}
          checked={checkTerms}
          setChecked={setCheckTerms}
          isValid={isCheckTermsValid}
          setIsValid={setIsCheckTermsValid}
          validation={(value) => value}
          validationMessage='필수 약관에 동의해주세요.'
          showMessage={showAllMessage}
          isRequired
        />
        <InputCheckbox
          id='privacy'
          name='privacy'
          label={<><a href='#'>개인정보 처리 방침</a>에 동의합니다(필수)</>}
          checked={checkPrivacy}
          setChecked={setCheckPrivacy}
          isValid={isCheckPrivacyValid}
          setIsValid={setIsCheckPrivacyValid}
          validation={(value) => value}
          validationMessage='필수 약관에 동의해주세요.'
          showMessage={showAllMessage}
          isRequired
        />
        <InputCheckbox
          id='marketing'
          name='marketing'
          label={["마케팅 메일 수신에 동의합니다(선택)"]}
          checked={checkMarketing}
          setChecked={setCheckMarketing}
        />
        <div>
          <span>유용한 정보를 보내드려요!</span>
        </div>
        <div>
          <button type='submit'>
            가입하기
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default SignUpForm;
