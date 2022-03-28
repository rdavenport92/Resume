import {
	Achievements,
	CertAwards,
	Education,
	Experience,
	PersonalInfo,
	Skills,
	Summary
} from '@components';
import { Pane } from '@layout';
import './Body.scss';

function Body() {
	return (
		<div style={{}} className="body">
			<Pane style={{ overflowY: 'auto' }}>
				<>
					<Summary />
					<Achievements />
					<Experience />
					<Education />
					<CertAwards />
				</>
			</Pane>
			<Pane
				style={{
					backgroundColor: '#f0f0f0',
					overflowY: 'auto'
				}}
			>
				<>
					<PersonalInfo />
					<Skills />
				</>
			</Pane>
		</div>
	);
}

export default Body;
