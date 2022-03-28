import { useCandidate } from '@providers';

function Sites() {
	const { sites } = useCandidate().personalInfo;
	return (
		<>
			{sites.map((site) => (
				<p key={site.text}>
					<a href={site.url} rel="noreferrer" target="_blank">
						{site.text}
					</a>
				</p>
			))}
		</>
	);
}

export default Sites;
