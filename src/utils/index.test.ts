import { ICandidate } from '@types';
import { initializeCandidate } from './';

describe('utils', () => {
	describe('initializeCandidate', () => {
		it('supplies initialized candidate with empty values if not values provided', () => {
			const expected: ICandidate = {
				name: '',
				title: '',
				personalInfo: {
					address: {
						city: '',
						state: '',
						zipCode: ''
					},
					email: '',
					phone: '',
					sites: []
				},
				summary: '',
				experience: [],
				skills: [],
				education: [],
				awards: [],
				certifications: [],
				achievements: []
			};

			const result = initializeCandidate({});

			expect(result).toEqual(expected);
		});

		it('maps raw data values to candidate values', () => {
			const expected: ICandidate = {
				name: 'name',
				title: 'title',
				personalInfo: {
					address: {
						city: 'city',
						state: 'state',
						zipCode: 'zipCode'
					},
					email: 'email',
					phone: 'phone',
					sites: [{ text: 'text', url: '/url' }]
				},
				summary: 'summary',
				experience: [
					{
						company: 'company',
						location: { city: 'city', state: 'state' },
						roles: [
							{
								title: 'title',
								dateRange: [{ startDate: 'start', endDate: 'end' }],
								achievements: ['achievement1', 'achievement2']
							}
						]
					}
				],
				skills: ['skill1', 'skill2'],
				education: [
					{
						degree: 'degree',
						school: 'school',
						field: 'field',
						startYear: 'start',
						endYear: 'end'
					}
				],
				awards: [{ presenter: 'presenter', category: 'category', place: 1 }],
				certifications: [
					{
						name: 'name',
						acquisitionDate: '01/2020',
						expirationDate: '04/2020'
					}
				],
				achievements: ['ach1', 'ach2']
			};

			const result = initializeCandidate({
				Name: 'name',
				Title: 'title',
				PersonalInfo: {
					Address: {
						City: 'city',
						State: 'state',
						ZipCode: 'zipCode'
					},
					Email: 'email',
					Phone: 'phone',
					Sites: [{ Text: 'text', Url: '/url' }]
				},
				Summary: 'summary',
				Experience: [
					{
						Company: 'company',
						Location: { City: 'city', State: 'state' },
						Roles: [
							{
								Title: 'title',
								DateRange: [{ StartDate: 'start', EndDate: 'end' }],
								Achievements: ['achievement1', 'achievement2']
							}
						]
					}
				],
				Skills: ['skill1', 'skill2'],
				Education: [
					{
						Degree: 'degree',
						School: 'school',
						Field: 'field',
						StartYear: 'start',
						EndYear: 'end'
					}
				],
				Awards: [{ Presenter: 'presenter', Category: 'category', Place: 1 }],
				Certifications: [
					{
						Name: 'name',
						AcquisitionDate: '01/2020',
						ExpirationDate: '04/2020'
					}
				],
				Achievements: ['ach1', 'ach2']
			});

			expect(result).toEqual(expected);
		});
	});
});
