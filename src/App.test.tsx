import { render, screen } from '@testing-library/react';
import App from './App';

const mockResumeDataTestId = 'mockResumeDataTestId';
const mockResumeProviderDataTestId = 'mockResumeProviderDataTestId';
const mockAppTitleDataTestId = 'mockAppTitleDataTestId';

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

jest.mock('@components', () => {
	function MockAppTitle() {
		return <div data-testid={mockAppTitleDataTestId} />;
	}

	return {
		AppTitle: MockAppTitle
	};
});

describe('App', () => {
	it('renders AppTitle within ResumeProvider', () => {
		render(<App />);

		const appDivWrapper = document.querySelector('.app');

		const resumeProviderWrapper = screen.queryByTestId(
			mockResumeProviderDataTestId
		);
		const appTitleWrapper = screen.queryByTestId(mockAppTitleDataTestId);

		expect(appDivWrapper?.children[0]).toBe(resumeProviderWrapper);
		expect(resumeProviderWrapper?.children[0]).toBe(appTitleWrapper);
	});

	it('renders Resume within ResumeProvider', () => {
		render(<App />);

		const appDivWrapper = document.querySelector('.app');

		const resumeProviderWrapper = screen.queryByTestId(
			mockResumeProviderDataTestId
		);
		const resumeWrapper = screen.queryByTestId(mockResumeDataTestId);

		expect(appDivWrapper?.children[0]).toBe(resumeProviderWrapper);
		expect(resumeProviderWrapper?.children[1]).toBe(resumeWrapper);
	});
});
