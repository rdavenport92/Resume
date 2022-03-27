import { render } from '@testing-library/react';
import AchievementsList from './AchievementsList';

const mockAchievements = ['ach1', 'ach2', 'ach3'];

describe('AchievementsList', () => {
	it('renders li for each achievement within ul', () => {
		render(<AchievementsList achievements={mockAchievements} />);

		const achievementsList = document.querySelector('ul');

		for (const achInd in mockAchievements) {
			const li = achievementsList?.children[achInd];
			expect(li?.tagName).toBe('LI');
			expect(li?.innerHTML).toBe(mockAchievements[achInd]);
		}
	});
});
