import { AchievementsList, Category } from '@components';
import { useCandidate } from '@providers';

export const ACHIEVEMENTS_NAME = 'Achievements';

function Achievements() {
	const { achievements } = useCandidate();

	return (
		<Category name={ACHIEVEMENTS_NAME}>
			<AchievementsList achievements={achievements} />
		</Category>
	);
}

export default Achievements;
