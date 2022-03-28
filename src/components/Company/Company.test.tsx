import { render, screen } from '@testing-library/react';
import { ICompany, IRole } from '@types';
import Company from './Company';

const mockCompanyHeaderDataTestId = 'companyHeaderDataTestId';
const mockRoleDataTestId = 'roleDataTestId';

const mockCompany: ICompany = {
	company: 'company',
	roles: [
		{
			title: 'title',
			achievements: ['achievement'],
			dateRange: [{ startDate: '01/2345', endDate: '04/4523' }]
		}
	],
	location: {
		city: 'city',
		state: 'state'
	}
};

jest.mock('@components', () => {
	function MockCompanyHeader({
		company,
		city,
		state
	}: {
		company: ICompany;
		city: string;
		state: string;
	}) {
		return (
			<div data-testid={mockCompanyHeaderDataTestId}>
				{company}
				{city}
				{state}
			</div>
		);
	}

	function MockRole({ title, dateRange, achievements }: IRole) {
		return (
			<div data-testid={mockRoleDataTestId}>
				{title}
				{dateRange[0].startDate}
				{dateRange[0].endDate}
				{achievements[0]}
			</div>
		);
	}

	return {
		CompanyHeader: MockCompanyHeader,
		Role: MockRole
	};
});

describe('Company', () => {
	it('renders CompanyHeader', () => {
		render(<Company {...mockCompany} />);

		expect(screen.getByTestId(mockCompanyHeaderDataTestId).innerHTML).toBe(
			`${mockCompany.company}${mockCompany.location.city}${mockCompany.location.state}`
		);
	});

	it('renders Roles', () => {
		render(<Company {...mockCompany} />);

		expect(screen.getByTestId(mockRoleDataTestId).innerHTML).toBe(
			`${mockCompany.roles[0].title}${mockCompany.roles[0].dateRange[0].startDate}${mockCompany.roles[0].dateRange[0].endDate}${mockCompany.roles[0].achievements[0]}`
		);
	});
});
