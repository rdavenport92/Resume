import { CompanyHeader, Role } from '@components';
import { ICompany } from '@types';

function Company({ company, roles, location }: ICompany) {
	return (
		<div className="company">
			<CompanyHeader
				company={company}
				city={location.city}
				state={location.state}
			/>
			{roles.map((role) => (
				<Role key={role.dateRange[0].startDate} {...role} />
			))}
		</div>
	);
}

export default Company;
