import { render, act, screen } from '@testing-library/react';
import { IRawCandidate } from '@types';
import ResumeProvider, { useCandidate } from './ResumeProvider';

const mockCandidateUri = 'mock/candidate/uri';
const mockLoaderDataTestId = 'loaderComponent';

const mockData: IRawCandidate = { Title: 'test-title' };

const OLD_ENV = { ...process.env };
process.env = {
	CANDIDATE_URI: mockCandidateUri
};

global.fetch = jest.fn();

jest.mock('@components', () => {
	function MockLoader() {
		return <div data-testid={mockLoaderDataTestId} />;
	}

	return {
		Loader: MockLoader
	};
});

describe('ResumeProvider', () => {
	beforeEach(() => {
		(global.fetch as jest.Mock).mockImplementation(async () =>
			Promise.resolve({
				json: async () => Promise.resolve(mockData)
			})
		);
	});

	afterAll(() => {
		process.env = OLD_ENV;
	});

	it('renders loader while content is being fetched', async () => {
		await act(async () => {
			render(
				<ResumeProvider>
					<></>
				</ResumeProvider>
			);

			expect(
				await screen.findByTestId(mockLoaderDataTestId)
			).toBeInTheDocument();
		});
	});

	it('renders Provider with children', async () => {
		const testComponentDataTestId = 'testComponent';

		function TestComponent() {
			const { title } = useCandidate();
			return <div data-testid={testComponentDataTestId}>{title}</div>;
		}

		await act(async () => {
			render(
				<ResumeProvider>
					<TestComponent />
				</ResumeProvider>
			);
		});

		expect((await screen.findByTestId(testComponentDataTestId)).innerHTML).toBe(
			mockData.Title
		);
	});
});
