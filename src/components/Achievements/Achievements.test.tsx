import { render, screen } from '@testing-library/react';
import Achievements, { ACHIEVEMENTS_NAME } from './Achievements';

const mockCategoryDataTestId = 'categoryComponent';
const mockAchievementsListDataTestId = 'achievementsListComponent';
const mockAchievements = ['ach1', 'ach2', 'ach3'];

jest.mock('@providers', () => ({
	useCandidate: () => ({ achievements: mockAchievements })
}));

jest.mock('@components', () => {
	function MockAchievementsList({ achievements }: { achievements: string[] }) {
		return (
			<div data-testid={mockAchievementsListDataTestId}>
				{achievements.map((ach) => (
					<div key={ach}>{ach}</div>
				))}
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
		AchievementsList: MockAchievementsList,
		Category: MockCategory
	};
});

describe('Achievements', () => {
	it(`renders Category component with name equal to ${ACHIEVEMENTS_NAME}`, () => {
		render(<Achievements />);

		const categoryWrapper = screen.getByTestId(mockCategoryDataTestId);
		expect(categoryWrapper.firstChild?.textContent).toBe(ACHIEVEMENTS_NAME);
	});

	it('renders AchievementsList as child of Category', () => {
		render(<Achievements />);

		const categoryWrapper = screen.getByTestId(mockCategoryDataTestId);
		const achievementsListWrapper = screen.getByTestId(
			mockAchievementsListDataTestId
		);

		expect(categoryWrapper).toContainElement(achievementsListWrapper);
	});

	it('renders AchievementsList with achievements from useCandidate', () => {
		render(<Achievements />);

		const achievementsListWrapper = screen.getByTestId(
			mockAchievementsListDataTestId
		);

		for (const achInd in mockAchievements) {
			expect(achievementsListWrapper.children[achInd].textContent).toBe(
				mockAchievements[achInd]
			);
		}
	});
});
