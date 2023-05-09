import {render, screen} from '@testing-library/react-native';
import Hello from './Hello';

describe('Hello', () => {
  it('displays the welcome message', () => {
    render(<Hello />);

    expect(screen.getByText(/Hello/)).toBeVisible();
  });

  it('displays the squirrel photo', () => {
    render(<Hello />);

    expect(screen.getByRole('image', {name: 'squirrel waving'})).toBeVisible();
  });

  it('displays a waving hand icon', () => {
    render(<Hello />);

    expect(screen.getByRole('image', {name: 'waving hand'})).toBeVisible();
  });
});
