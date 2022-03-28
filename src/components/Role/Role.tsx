import { AchievementsList } from '@components';
import { IRole } from '@types';
import './Role.scss';

function Role({ title, dateRange, achievements }: IRole) {
	const dateRangeStr = dateRange
		.map((range) => `${range.startDate} - ${range.endDate}`)
		.join(', ');

	return (
		<div className="role">
			<div className="role-header">
				<h4>{title}</h4>
				<p>{dateRangeStr}</p>
			</div>
			<AchievementsList achievements={achievements} />
		</div>
	);
}

export default Role;
