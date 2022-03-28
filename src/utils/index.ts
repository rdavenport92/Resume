import { IRawCandidate, ICandidate } from 'types';

export const initializeCandidate = (
	rawData: Partial<IRawCandidate>
): ICandidate => ({
	name: rawData.Name || '',
	title: rawData.Title || '',
	personalInfo: {
		address: {
			street: rawData.PersonalInfo?.Address?.Street || '',
			city: rawData.PersonalInfo?.Address?.City || '',
			state: rawData.PersonalInfo?.Address?.State || '',
			zipCode: rawData.PersonalInfo?.Address?.ZipCode || ''
		},
		email: rawData.PersonalInfo?.Email || '',
		phone: rawData.PersonalInfo?.Phone || '',
		sites:
			rawData.PersonalInfo?.Sites?.map((site) => ({
				text: site.Text || '',
				url: site.Url || ''
			})) || []
	},
	summary: rawData.Summary || '',
	experience:
		rawData.Experience?.map((exp) => ({
			company: exp.Company || '',
			location: {
				city: exp.Location?.City || '',
				state: exp.Location?.State || ''
			},
			roles:
				exp.Roles?.map((role) => ({
					title: role.Title || '',
					dateRange:
						role.DateRange?.map((date) => ({
							startDate: date.StartDate || '',
							endDate: date.EndDate || ''
						})) || [],
					achievements: role.Achievements || []
				})) || []
		})) || [],
	skills: rawData.Skills || [],
	education:
		rawData.Education?.map((ed) => ({
			degree: ed.Degree || '',
			school: ed.School || '',
			field: ed.Field || '',
			startYear: ed.StartYear || '',
			endYear: ed.EndYear || ''
		})) || [],
	awards:
		rawData.Awards?.map((award) => ({
			presenter: award.Presenter || '',
			category: award.Category || '',
			place: award.Place || null
		})) || [],
	certifications:
		rawData.Certifications?.map((cert) => ({
			name: cert.Name || '',
			acquisitionDate: cert.AcquisitionDate || '',
			expirationDate: cert.ExpirationDate || ''
		})) || [],
	achievements: rawData.Achievements || []
});
