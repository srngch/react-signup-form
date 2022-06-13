import { FormData } from '../types/form.type';

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePhone = (phone: string) => {
  const re = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  return re.test(phone);
};

const validatePassword = (password: string) => {
  const re =
    /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return re.test(String(password));
};

const validateConfirmPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};

const validateUsername = (username: string) => {
  const re = /^[a-zA-Z0-9]{3,15}$/;
  return re.test(String(username));
};

const validateReferralUsername = (username: string) => {
  const re = /^[a-zA-Z0-9]{3,15}$/;
  return re.test(String(username));
};

const validateSignUpForm = ({
  email,
  password,
  confirmPassword,
  phone,
  username,
  referralUsername,
  isTermsAgree,
  isPrivacyAgree,
} : FormData) => ({
  email: validateEmail(email),
  password: validatePassword(password),
  confirmPassword: validateConfirmPassword(password, confirmPassword),
  phone: validatePhone(phone),
  username: validateUsername(username),
  referralUsername: referralUsername === '' ? true : validateReferralUsername(referralUsername),
  isTermsAgree: isTermsAgree === true,
  isPrivacyAgree: isPrivacyAgree === true,
});

export {
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
  validateUsername,
  validateReferralUsername,
  validateSignUpForm
};
