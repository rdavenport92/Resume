import { Category } from '@components';
import { useCandidate } from '@providers';

function Summary() {
	const { summary } = useCandidate();

	return (
		<Category name="Summary">
			<p>{summary}</p>
		</Category>
	);
}

export default Summary;
