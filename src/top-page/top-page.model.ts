export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Goods,
}

export class TopPageModel {
	firstLevelCategory: TopLevelCategory;
	secondLevelCategory: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorSallary: number;
		middleSallary: number;
		seniorSallary: number;
	};
	advantages: {
		title: string;
		description: string;
	}[];
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
