import { useCandidate } from '@providers';
import { Helmet } from 'react-helmet';

function AppTitle() {
	const { name } = useCandidate();

	return (
		<Helmet>
			<title>Resume - {name}</title>
		</Helmet>
	);
}

export default AppTitle;
