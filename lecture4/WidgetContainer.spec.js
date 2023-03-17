import {render, screen} from '@testing-library/react-native';
import WidgetContainer from './WidgetContainer';

describe('WidgetContainer', () => {
  it('loads widgets upon first render', () => {
    render(<WidgetContainer />);

    expect(screen.getByText('Widget 1')).toBeVisible();
    expect(screen.getByText('Widget 2')).toBeVisible();
  });
});
