import { Category } from '@components';
import { useCandidate } from '@providers';

import './Skills.scss';

function Skills() {
	const { skills } = useCandidate();

	return (
		<Category name="Skills">
			<ul className="skills">
				{skills.map((skill) => (
					<li key={skill}>
						<p className="skill">{skill}</p>
					</li>
				))}
			</ul>
		</Category>
	);
}

export default Skills;
