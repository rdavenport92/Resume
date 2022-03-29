import { useMediaQueryMatch } from '@hooks';
import { Body, Header } from '@layout';
import { useEffect, useState } from 'react';
import './Resume.scss';

function Resume() {
	const [showSidebar, setShowSidebar] = useState(false);
	const queryMatch = useMediaQueryMatch();

	useEffect(() => {
		if (!queryMatch) {
			setShowSidebar(true);
		} else {
			setShowSidebar(false);
		}
	}, [queryMatch]);

	return (
		<div className="resume">
			<Header toggleSidebar={() => setShowSidebar(!showSidebar)} />
			<Body showSidebar={showSidebar} />
		</div>
	);
}

export default Resume;
