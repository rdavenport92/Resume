import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('Renders the text "Resume"', () => {
		render(<App />);

		const wrapper = screen.getByTestId('App');

		expect(wrapper.innerHTML).toBe('Resume');
	});
});
