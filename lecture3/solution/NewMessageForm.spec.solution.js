import {fireEvent, render, screen} from '@testing-library/react-native';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  describe('pressing send', () => {
    const messageText = 'Hello world';

    let sendHandler;

    function renderAndSend() {
      sendHandler = jest.fn().mockName('sendHandler');
      render(<NewMessageForm onSend={sendHandler} />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Message'),
        'Hello world',
      );
      fireEvent.press(screen.getByText('Send'));
    }

    it('clears the message field', () => {
      renderAndSend();
      expect(screen.getByPlaceholderText('Message')).toHaveProp('value', '');
    });

    it('calls the send handler', () => {
      renderAndSend();
      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
