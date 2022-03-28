import { render, screen } from '@testing-library/react';
import Loader from './Loader';

const loaderComponentDataTestId = 'circlesDataTestId';

jest.mock('react-loader-spinner', () => {
	function MockFallingLines() {
		return <div data-testid={loaderComponentDataTestId} />;
	}

	return {
		FallingLines: MockFallingLines
	};
});

describe('Loader', () => {
	it('renders loader component', () => {
		render(<Loader />);

		expect(screen.queryByTestId(loaderComponentDataTestId)).toBeInTheDocument();
	});
});
