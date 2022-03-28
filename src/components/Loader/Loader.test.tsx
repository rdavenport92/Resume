import { render, screen } from '@testing-library/react';
import Loader from './Loader';

const spinningCirclesDataTestId = 'circlesDataTestId';

jest.mock('react-loading-icons', () => {
	function MockSpinningCircles() {
		return <div data-testid={spinningCirclesDataTestId} />;
	}

	return {
		SpinningCircles: MockSpinningCircles
	};
});

describe('Loader', () => {
	it('renders SpinningCircles', () => {
		render(<Loader />);

		expect(screen.queryByTestId(spinningCirclesDataTestId)).toBeInTheDocument();
	});
});
