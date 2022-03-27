import { render } from '@testing-library/react';
import { ICert } from '@types';
import Cert from './Cert';

const mockCert: ICert = {
	name: 'name',
	acquisitionDate: '01/2020',
	expirationDate: '05/2020'
};

describe('Cert', () => {
	it('renders cert name', () => {
		render(
			<Cert
				name={mockCert.name}
				acquisitionDate={mockCert.acquisitionDate}
				expirationDate={mockCert.expirationDate}
			/>
		);

		expect(document.querySelector('.cert')?.firstChild?.textContent).toBe(
			mockCert.name
		);
	});

	it('renders date range', () => {
		render(
			<Cert
				name={mockCert.name}
				acquisitionDate={mockCert.acquisitionDate}
				expirationDate={mockCert.expirationDate}
			/>
		);

		expect(document.querySelector('.cert')?.children[1]?.textContent).toBe(
			`${mockCert.acquisitionDate} - ${mockCert.expirationDate}`
		);
	});
});
