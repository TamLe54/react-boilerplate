import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

describe('Counter', () => {
  test('should render with initial state of 1', async () => {
    renderCounter();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();

    expect(await screen.findByTestId('one-up-button')).toBeInTheDocument();
  });

  test('should increase count by clicking a button', async () => {
    const user = userEvent.setup();

    renderCounter();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();

    await act(async () => {
      await user.click(await screen.findByTestId('one-up-button'));
    });

    expect(await screen.findByText(/^2$/)).toBeInTheDocument();
  });
});

const renderCounter = () => {
  return render(<Counter />);
};
