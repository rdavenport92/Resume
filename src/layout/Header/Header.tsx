import { useMediaQueryMatch } from '@hooks';
import { useCandidate } from '@providers';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.scss';

function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
	const { name, title } = useCandidate();
	const queryMatch = useMediaQueryMatch();

	return (
		<div className="header">
			<div>
				<h1>{name}</h1>
				<h4>{title}</h4>
			</div>
			{queryMatch ? (
				<div className="menu-icon">
					<IconButton onClick={() => toggleSidebar()}>
						<MenuIcon fontSize="large" style={{ color: '#ffffff' }} />
					</IconButton>
				</div>
			) : null}
		</div>
	);
}

export default Header;
