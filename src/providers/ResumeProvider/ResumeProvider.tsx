import { Loader } from '@components';
import { ICandidate } from '@types';
import { initializeCandidate } from '@utils';
import { createContext, useContext, useEffect, useState } from 'react';

const ResumeContext = createContext<ICandidate>(initializeCandidate({}));

function ResumeProvider({ children }: { children: JSX.Element }) {
	const [candidateData, setCandidateData] = useState<ICandidate>(
		initializeCandidate({})
	);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCandidateUri = process.env.CANDIDATE_URI;

		if (getCandidateUri) {
			(async () => {
				setIsLoading(true);
				const data = initializeCandidate(
					await fetch(getCandidateUri).then((res) => res.json())
				);
				setCandidateData(data);
				setIsLoading(false);
			})();
		}
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<ResumeContext.Provider value={candidateData}>
			{children}
		</ResumeContext.Provider>
	);
}

export const useCandidate = (): ICandidate => useContext(ResumeContext);

export default ResumeProvider;
