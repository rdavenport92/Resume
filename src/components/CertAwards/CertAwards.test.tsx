import { render, screen } from '@testing-library/react';
import { IAward, ICert } from '@types';
import CertAwards, { CERT_AWARDS_NAME } from './CertAwards';

const mockCategoryDataTestId = 'mockCategory';
const mockCertDataTestId = 'certDataTestId';
const mockAwardDataTestId = 'awardDataTestId';

const mockAwards: IAward[] = [
	{ presenter: 'presenter', category: 'category', place: 1 }
];

const mockCerts: ICert[] = [
	{ name: 'cert', acquisitionDate: '04/2019', expirationDate: '01/2020' }
];

jest.mock('@providers', () => ({
	useCandidate: () => ({ awards: mockAwards, certifications: mockCerts })
}));

jest.mock('@components', () => {
	function MockCert({ name, acquisitionDate, expirationDate }: ICert) {
		return (
			<div data-testid={mockCertDataTestId}>
				{name}
				{acquisitionDate}
				{expirationDate}
			</div>
		);
	}

	function MockAward({ presenter, category, place }: IAward) {
		return (
			<div data-testid={mockAwardDataTestId}>
				{presenter}
				{category}
				{place}
			</div>
		);
	}

	function MockCategory({
		children,
		name
	}: {
		children: JSX.Element;
		name: string;
	}) {
		return (
			<div data-testid={mockCategoryDataTestId}>
				<div>{name}</div>
				{children}
			</div>
		);
	}

	return {
		Cert: MockCert,
		Category: MockCategory,
		Award: MockAward
	};
});

describe('Achievements', () => {
	it(`renders Category component with name equal to ${CERT_AWARDS_NAME}`, () => {
		render(<CertAwards />);

		const categoryWrapper = screen.getByTestId(mockCategoryDataTestId);
		expect(categoryWrapper.firstChild?.textContent).toBe(CERT_AWARDS_NAME);
	});

	it('renders Cert as child of Category', () => {
		render(<CertAwards />);

		const categoryWrapper = screen.getByTestId(mockCategoryDataTestId);
		const certWrapper = screen.getByTestId(mockCertDataTestId);

		expect(categoryWrapper).toContainElement(certWrapper);
		expect(certWrapper.innerHTML).toBe(
			`${mockCerts[0].name}${mockCerts[0].acquisitionDate}${mockCerts[0].expirationDate}`
		);
	});

	it('renders Award as child of Category', () => {
		render(<CertAwards />);

		const categoryWrapper = screen.getByTestId(mockCategoryDataTestId);
		const awardWrapper = screen.getByTestId(mockAwardDataTestId);

		expect(categoryWrapper).toContainElement(awardWrapper);
		expect(awardWrapper.innerHTML).toBe(
			`${mockAwards[0].presenter}${mockAwards[0].category}${mockAwards[0].place}`
		);
	});
});
