import { SpinningCircles } from 'react-loading-icons';

const Loader = () => (
	<SpinningCircles
		fill="#376878"
		stroke="#376878"
		speed={1}
		fillOpacity={1}
		strokeOpacity={0.25}
		style={{
			width: '100%',
			transform: 'translateY(-50%)',
			position: 'absolute',
			top: '50%',
			height: '10%'
		}}
	/>
);

export default Loader;
