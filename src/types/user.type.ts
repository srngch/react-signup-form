export type User = {
	id: number;
	email: string;
	phone: string;
	username: string;
	referralUserId: number | null;
	isTermsAgree: boolean;
	isPrivacyAgree: boolean;
	isMarketingAgree: boolean;
	createdAt: Date;
	updatedAt?: Date | null;
};
