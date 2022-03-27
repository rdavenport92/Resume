import { useCandidate } from '@providers';

function Address() {
	const { street, city, state, zipCode } = useCandidate().personalInfo.address;

	return (
		<>
			<p>{street}</p>
			<p>{`${city}, ${state} ${zipCode}`}</p>
		</>
	);
}

export default Address;
