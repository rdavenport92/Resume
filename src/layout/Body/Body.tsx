import {
	Achievements,
	CertAwards,
	Education,
	Experience,
	PersonalInfo,
	Skills,
	Summary
} from '@components';
import { useMediaQueryMatch } from '@hooks';
import { Pane } from '@layout';
import React from 'react';
import './Body.scss';

function Body({ showSidebar }: { showSidebar: boolean }) {
	const queryMatch = useMediaQueryMatch();

	const additionalStyleProps: React.CSSProperties = queryMatch ? {
		position: 'absolute',
		right: 0,
		maxWidth: '250px',
		height: 'calc(100% - 142px)',
		boxShadow: '-2px 0px rgba(0, 0, 0, .1)',
	} : {};

	return (
		<div className="body">
			<Pane style={{ overflowY: 'auto' }}>
				<>
					<Summary />
					<Achievements />
					<Experience />
					<Education />
					<CertAwards />
				</>
			</Pane>
			{showSidebar ? (
				<Pane
					style={{
						overflowY: 'auto',
						backgroundColor: '#f0f0f0',
						...additionalStyleProps
					}}
				>
					<>
						<PersonalInfo />
						<Skills />
					</>
				</Pane>
			) : null}
		</div>
	);
}

export default Body;
