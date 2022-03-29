import { render } from '@testing-library/react';
import Address from './Address';

const mockAddress = {
	street: 'mockStreet',
	city: 'mockCity',
	state: 'mockState',
	zipCode: 'mockZipCode'
};

jest.mock('@providers', () => ({
	useCandidate: () => ({
		personalInfo: {
			address: mockAddress
		}
	})
}));

describe('Address', () => {
	it('renders paragraph elements with address info', () => {
		render(<Address />);

		const [pCityStateZip] = Array.from(document.querySelectorAll('p'));

		expect(pCityStateZip.innerHTML).toBe(
			`${mockAddress.city}, ${mockAddress.state} ${mockAddress.zipCode}`
		);
	});
});
