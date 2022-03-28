import { render } from '@testing-library/react';
import { ILocation } from '@types';
import CompanyHeader from './CompanyHeader';

const mockCompany = 'mockCompany';
const mockLocation: ILocation = {
	city: 'mockCity',
	state: 'mockState'
};

describe('CompanyHeader', () => {
	it('renders company', () => {
		render(<CompanyHeader company={mockCompany} {...mockLocation} />);

		const h2 = document.querySelector('.company-header')?.children[0];

		expect(h2?.tagName).toBe('H2');
		expect(h2?.textContent).toBe(mockCompany);
	});

	it('renders city and state', () => {
		render(<CompanyHeader company={mockCompany} {...mockLocation} />);

		const h4 = document.querySelector('.company-header')?.children[1];

		expect(h4?.tagName).toBe('H4');
		expect(h4?.textContent).toBe(
			` - ${mockLocation.city}, ${mockLocation.state}`
		);
	});
});
