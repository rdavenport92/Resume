import { render, screen } from '@testing-library/react';
import Resume from './Resume';

const mockBodyDataTestId = 'bodyDataTestId';
const mockHeaderDataTestId = 'headerDataTestId';

jest.mock('@layout', () => {
	function MockHeader() {
		return <div data-testid={mockHeaderDataTestId} />;
	}

	function MockBody() {
		return <div data-testid={mockBodyDataTestId} />;
	}

	return {
		Header: MockHeader,
		Body: MockBody
	};
});

jest.mock('@hooks', () => ({
	useMediaQueryMatch: () => false
}));

describe('Resume', () => {
	it('renders header', () => {
		render(<Resume />);

		const resumeWrapper = document.querySelector('.resume');
		const headerWrapper = screen.queryByTestId(mockHeaderDataTestId);

		expect(resumeWrapper?.children[0]).toBe(headerWrapper);
	});

	it('renders body', () => {
		render(<Resume />);

		const resumeWrapper = document.querySelector('.resume');
		const bodyWrapper = screen.queryByTestId(mockBodyDataTestId);

		expect(resumeWrapper?.children[1]).toBe(bodyWrapper);
	});
});
