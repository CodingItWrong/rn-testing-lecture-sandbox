import {render, screen} from '@testing-library/react-native';
import nock from 'nock';
import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  it('loads restaurants upon first render', async () => {
    nock('https://api.outsidein.dev')
      .get(/\/.*\/restaurants/)
      .reply(200, [
        {id: 1, name: 'Pasta Place'},
        {id: 2, name: 'Salad Place'},
      ]);

    render(<RestaurantContainer />);

    expect(await screen.findByText('Pasta Place')).toBeVisible();
    expect(screen.getByText('Salad Place')).toBeVisible();
  });
});
