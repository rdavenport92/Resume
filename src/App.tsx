import { Resume } from '@views';
import { ResumeProvider } from '@providers';
import './App.scss';

function App() {
	return (
		<div className="app">
			<ResumeProvider>
				<Resume />
			</ResumeProvider>
		</div>
	);
}

export default App;
