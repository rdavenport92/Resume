import { useCandidate } from '@providers';
import './Header.scss';

function Header() {
	const { name, title } = useCandidate();

	return (
		<div className="header">
			<h1>{name}</h1>
			<h4>{title}</h4>
		</div>
	);
}

export default Header;
