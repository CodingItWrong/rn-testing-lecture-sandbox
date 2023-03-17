import {render, screen} from '@testing-library/react-native';
import nock from 'nock';
import WidgetContainer from './WidgetContainer';

describe('WidgetContainer Nock', () => {
  it('loads widgets upon first render', async () => {
    nock('https://rn-testing-api.herokuapp.com')
      .get('/widgets')
      .reply(200, [
        {id: 1, name: 'Widget A'},
        {id: 2, name: 'Widget B'},
      ]);

    render(<WidgetContainer />);

    await screen.findByText('Widget A');
    expect(screen.getByText('Widget B')).toBeVisible();
  });
});
