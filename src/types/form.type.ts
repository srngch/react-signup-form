export type FormData = {
	email: string;
  password: string;
  confirmPassword: string;
	phone: string;
	username: string;
  referralUsername: string;
  isAllAgree: boolean;
	isTermsAgree: boolean;
	isPrivacyAgree: boolean;
	isMarketingAgree: boolean;
}

export type Validations = {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  phone: boolean;
  username: boolean;
  referralUsername: boolean;
  isTermsAgree: boolean;
  isPrivacyAgree: boolean;
}
