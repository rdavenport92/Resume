import { Category } from '@components';
import { useCandidate } from '@providers';

function Education() {
	const { education } = useCandidate();

	return (
		<Category name="Education">
			<>
				{education.map(({ degree, school, field, startYear, endYear }) => (
					<div key={field}>
						<div>{`${degree} ${field}`}</div>
						<div>{school}</div>
						<div>{`${startYear} - ${endYear}`}</div>
					</div>
				))}
			</>
		</Category>
	);
}

export default Education;
