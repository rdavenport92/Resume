import { render, screen } from '@testing-library/react';
import AppTitle from './AppTitle';

const mockHelmetDataTestId = 'mockHelmetDataTestId';
const mockName = 'mockName';

jest.mock('react-helmet', () => {
	function MockHelmet({ children }: { children: JSX.Element }) {
		return <div data-testid={mockHelmetDataTestId}>{children}</div>;
	}

	return {
		Helmet: MockHelmet
	};
});

jest.mock('@providers', () => ({
	useCandidate: () => ({ name: mockName })
}));

describe('AppTitle', () => {
	it('renders title within helmet', () => {
		render(<AppTitle />);

		expect(
			screen.queryByTestId(mockHelmetDataTestId)?.children[0].tagName
		).toBe('TITLE');
	});

	it('renders name within title', () => {
		render(<AppTitle />);

		const title = Array.from(document.getElementsByTagName('title'))[0];

		expect(title.innerHTML).toBe(`Resume - ${mockName}`);
	});
});
