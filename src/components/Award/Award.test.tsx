import { render } from '@testing-library/react';
import Award from './Award';

const mockPresenter = 'mockPresenter';
const mockCategory = 'mockCategory';
const mockPlace = 1;

describe('Award', () => {
	it('renders presenter and category', () => {
		render(
			<Award
				presenter={mockPresenter}
				category={mockCategory}
				place={mockPlace}
			/>
		);

		const awardDiv = document.querySelector('.award');

		expect(awardDiv?.firstChild?.textContent).toBe(
			`${mockPresenter} - ${mockCategory}`
		);
	});

	[
		{ place: 1, expected: ' 1st Place' },
		{ place: 2, expected: ' 2nd Place' },
		{ place: 3, expected: ' 3rd Place' },
		{ place: null, expected: '' }
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
