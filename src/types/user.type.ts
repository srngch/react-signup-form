export type User = {
	id: number;
	email: string;
	phone: string;
	username: string;
	referralUserId: number | null;
	isTermsAccepted: boolean;
	isPrivacyAccepted: boolean;
	isMarketingAccepted: boolean;
	createdAt: Date;
	updatedAt?: Date | null;
};
