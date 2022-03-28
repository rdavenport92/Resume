import { render, screen } from '@testing-library/react';
import App from './App';

const mockResumeDataTestId = 'mockResumeDataTestId';
const mockResumeProviderDataTestId = 'mockResumeProviderDataTestId';

jest.mock('@views', () => {
	function MockResume() {
		return <div data-testid={mockResumeDataTestId} />;
	}

	return {
		Resume: MockResume
	};
});

jest.mock('@providers', () => {
	function MockResumeProvider({ children }: { children: JSX.Element }) {
		return <div data-testid={mockResumeProviderDataTestId}>{children}</div>;
	}

	return {
		ResumeProvider: MockResumeProvider
	};
});

describe('App', () => {
	it('renders Resume within ResumeProvider', () => {
		render(<App />);

		const appDivWrapper = document.querySelector('.app');

		const resumeProviderWrapper = screen.queryByTestId(
			mockResumeProviderDataTestId
		);
		const resumeWrapper = screen.queryByTestId(mockResumeDataTestId);

		expect(appDivWrapper?.children[0]).toBe(resumeProviderWrapper);
		expect(resumeProviderWrapper?.children[0]).toBe(resumeWrapper);
	});
});
