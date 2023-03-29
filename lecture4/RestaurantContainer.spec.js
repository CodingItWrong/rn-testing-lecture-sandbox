import {render, screen} from '@testing-library/react-native';
import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  it('loads restaurants upon first render', () => {
    render(<RestaurantContainer />);

    expect(screen.getByText('Pasta Place')).toBeVisible();
    expect(screen.getByText('Salad Place')).toBeVisible();
  });
});
