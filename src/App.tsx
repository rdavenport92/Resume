import { AppTitle } from '@components';
import { ResumeProvider } from '@providers';
import { Resume } from '@views';
import './App.scss';

function App() {
	return (
		<div className="app">
			<ResumeProvider>
				<>
					<AppTitle />
					<Resume />
				</>
			</ResumeProvider>
		</div>
	);
}

export default App;
