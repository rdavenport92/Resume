import { Address, Sites, Category } from '@components';
import { useCandidate } from '@providers';

function PersonalInfo() {
	const { email, phone } = useCandidate().personalInfo;

	return (
		<Category name="Personal Info">
			<div>
				<Address />
				<p>{email}</p>
				<p>{phone}</p>
				<Sites />
			</div>
		</Category>
	);
}

export default PersonalInfo;
