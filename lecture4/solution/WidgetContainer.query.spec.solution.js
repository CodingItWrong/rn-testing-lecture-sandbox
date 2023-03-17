import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, screen} from '@testing-library/react-native';
import WidgetContainer from './WidgetContainer';

import api from './api';

jest.mock('./api');

function QueryClientWrapper({children}) {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

describe('WidgetContainer', () => {
  it('loads widgets upon first render', async () => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ],
    });

    render(
      <QueryClientWrapper>
        <WidgetContainer />
      </QueryClientWrapper>,
    );

    await screen.findByText('Widget 1');
    expect(screen.getByText('Widget 2')).toBeVisible();

    expect(api.get).toHaveBeenCalledWith('/widgets');
  });
});
