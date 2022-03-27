import { render, screen } from '@testing-library/react';
import Category from './Category';

describe('Category', () => {
	it('renders the category name', () => {
		const testName = 'category-name';

		render(
			<Category name={testName}>
				<></>
			</Category>
		);

		const nameElement = document.querySelector('h3');

		expect(nameElement?.innerHTML).toBe(testName);
		expect(document.querySelector('hr')).toBeInTheDocument();
	});

	it('does not render the category name if not provided', () => {
		render(
			<Category>
				<></>
			</Category>
		);

		expect(document.querySelector('h3')).not.toBeInTheDocument();
		expect(document.querySelector('hr')).not.toBeInTheDocument();
	});

	it('renders children', () => {
		const testComponentDataTestId = 'testComponent';

		function TestComponent() {
			return <div data-testid={testComponentDataTestId} />;
		}

		render(
			<Category>
				<TestComponent />
			</Category>
		);

		const categoryWrapper = screen.queryByTestId(testComponentDataTestId);
		expect(categoryWrapper).toBeInTheDocument();
	});
});
