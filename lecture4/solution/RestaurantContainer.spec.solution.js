import {render, screen} from '@testing-library/react-native';
import RestaurantContainer from './RestaurantContainer';
import api from './api';

jest.mock('./api');

describe('RestaurantContainer', () => {
  it('loads restaurants upon first render', async () => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, name: 'Pasta Place'},
        {id: 2, name: 'Salad Place'},
      ],
    });

    render(<RestaurantContainer />);

    expect(await screen.findByText('Pasta Place')).toBeVisible();
    expect(screen.getByText('Salad Place')).toBeVisible();

    expect(api.get).toHaveBeenCalledWith('/restaurants');
  });
});
