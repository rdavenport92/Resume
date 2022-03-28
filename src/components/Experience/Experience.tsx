import { Category, Company } from '@components';
import { IRole } from '@types';
import { useCandidate } from '@providers';
import './Experience.scss';

const getTotalDateRange = (roles: IRole[]) => {
	const firstRoleIndex = roles.length - 1;
	const mostRecentDateIndex = roles[0].dateRange.length - 1;

	const startDate = roles[firstRoleIndex].dateRange[0].startDate;
	const endDate = roles[0].dateRange[mostRecentDateIndex].endDate;

	return `${startDate} - ${endDate}`;
};

function Experience() {
	const { experience } = useCandidate();

	return (
		<Category name="Experience">
			<>
				{experience.map((company) => {
					return (
						<Company key={getTotalDateRange(company.roles)} {...company} />
					);
				})}
			</>
		</Category>
	);
}

export default Experience;
