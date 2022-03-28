import { ILocation } from '@types';

function CompanyHeader({
	company,
	city,
	state
}: { company: string } & ILocation) {
	return (
		<div className="company-header">
			<h2>{company}</h2>
			<h4>{` - ${city}, ${state}`}</h4>
		</div>
	);
}

export default CompanyHeader;
