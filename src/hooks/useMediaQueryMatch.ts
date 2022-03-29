import { useState, useEffect } from 'react';

enum MEDIA_QUERY_EVENT {
	CHANGE = 'change'
}

const mediaQuery = '(max-width: 600px)';

const useMediaQueryMatch = () => {
	const [queryMatch, setQueryMatch] = useState(true);

	useEffect(() => {
		setQueryMatch(window.matchMedia(mediaQuery).matches);

		window
			.matchMedia(mediaQuery)
			.addEventListener(MEDIA_QUERY_EVENT.CHANGE, ({ matches }) => {
				setQueryMatch(matches);
			});
	}, []);

	return queryMatch;
};

export default useMediaQueryMatch;
