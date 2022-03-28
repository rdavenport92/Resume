import { render } from '@testing-library/react';
import Award from './Award';

const mockPresenter = 'mockPresenter';
const mockCategory = 'mockCategory';
const mockPlace = 1;

describe('Award', () => {
	it('renders presenter', () => {
		render(
			<Award
				presenter={mockPresenter}
				category={mockCategory}
				place={mockPlace}
			/>
		);

		const awardDiv = document.querySelector('.award');

		expect(awardDiv?.firstChild?.textContent).toBe(`${mockPresenter}`);
	});

	[
		{ place: 1, expected: `${mockCategory} - 1st Place` },
		{ place: 2, expected: `${mockCategory} - 2nd Place` },
		{ place: 3, expected: `${mockCategory} - 3rd Place` },
		{ place: null, expected: mockCategory }
	].forEach(({ expected, place }) => {
		it(`renders "${expected}" if place is ${place}`, () => {
			render(
				<Award
					presenter={mockPresenter}
					category={mockCategory}
					place={place}
				/>
			);
			const awardDiv = document.querySelector('.award');

			expect(awardDiv?.children[1].textContent).toBe(expected);
		});
	});
});
