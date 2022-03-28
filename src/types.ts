export interface IRawCandidate {
	Name?: string;
	Title?: string;
	PersonalInfo?: {
		Address?: {
			Street?: string;
			City?: string;
			State?: string;
			ZipCode?: string;
		};
		Email?: string;
		Phone?: string;
		Sites?: {
			text?: string;
			url?: string;
		}[];
	};
	Summary?: string;
	Experience?: {
		Company?: string;
		Location?: {
			City?: string;
			State?: string;
		};
		Roles?: {
			Title?: string;
			Achievements?: string[];
			DateRange?: {
				StartDate?: string;
				EndDate?: string;
			}[];
		}[];
	}[];
	Skills?: string[];
	Education?: {
		Degree?: string;
		Field?: string;
		School?: string;
		StartYear?: string;
		EndYear?: string;
	}[];
	Awards?: {
		Presenter?: string;
		Category?: string;
		Place?: number;
	}[];
	Certifications?: {
		Name?: string;
		AcquisitionDate?: string;
		ExpirationDate?: string;
	}[];
	Achievements?: string[];
}

export interface ICompany {
	company: string;
	location: ILocation;
	roles: IRole[];
}

export interface ILocation {
	city: string;
	state: string;
}

export interface IRole {
	title: string;
	achievements: string[];
	dateRange: {
		startDate: string;
		endDate: string;
	}[];
}

export interface ICert {
	name: string;
	acquisitionDate: string;
	expirationDate: string;
}

export interface IAward {
	presenter: string;
	category: string;
	place: number | null;
}

export interface ICandidate {
	name: string;
	title: string;
	personalInfo: {
		address: {
			street: string;
			city: string;
			state: string;
			zipCode: string;
		};
		email: string;
		phone: string;
		sites: {
			text: string;
			url: string;
		}[];
	};
	summary: string;
	experience: ICompany[];
	skills: string[];
	education: {
		degree: string;
		field: string;
		school: string;
		startYear: string;
		endYear: string;
	}[];
	awards: IAward[];
	certifications: ICert[];
	achievements: string[];
}
