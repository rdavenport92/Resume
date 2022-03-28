import { IAward } from '@types';
import './Award.scss';

const coercePlace = (place: number) =>
	['1st', '2nd', '3rd'].find((_, index) => place === index + 1);

function Award({ presenter, category, place }: IAward) {
	return (
		<div className="award">
			<div>{`${presenter}`}</div>
			<div>
				{category}
				{place && ` - ${coercePlace(place)} Place`}
			</div>
		</div>
	);
}

export default Award;
