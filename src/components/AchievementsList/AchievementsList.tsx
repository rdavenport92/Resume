import './AchievementsList.scss';

function AchievementList({ achievements }: { achievements: string[] }) {
	return (
		<ul className="achievements-list">
			{achievements.map((achievement) => (
				<li key={achievement}>{achievement}</li>
			))}
		</ul>
	);
}

export default AchievementList;
