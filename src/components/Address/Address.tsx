import { useCandidate } from '@providers';

function Address() {
	const { city, state, zipCode } = useCandidate().personalInfo.address;

	return (
		<>
			<p>{`${city}, ${state} ${zipCode}`}</p>
		</>
	);
}

export default Address;
