import {render, screen} from '@testing-library/react-native';
import Hello from './Hello';

describe('Hello', () => {
  it('displays the welcome message', () => {
    render(<Hello />);

    expect(screen.getByText(/Hello/)).toBeVisible();
    expect(screen.getByLabelText('squirrel waving')).toBeVisible();
    expect(screen.getByLabelText('waving hand')).toBeVisible();
  });

  it('renders the passed-in name', () => {
    render(<Hello name="Josh" />);

    expect(screen.getByText('Hello, Josh!')).toBeVisible();
  });
});
