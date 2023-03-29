describe('Lecture 5', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Lecture 5')).tap();
  });

  it('detects text', async () => {
    await expect(element(by.label('Hello, Lecture 5!'))).toBeVisible();
    await expect(element(by.id('welcome'))).toBeVisible();
    await expect(element(by.id('welcome'))).toHaveText('Hello, Lecture 5!');
  });

  it('allows tapping buttons', async () => {
    await element(by.id('mybutton')).tap();
    await expect(element(by.text('You tapped the button!'))).toBeVisible();
  });

  it('allows typing into text fields', async () => {
    await element(by.id('mytextinput')).typeText('I typed this');
    await expect(element(by.text('Entered text: I typed this'))).toBeVisible();
    await expect(element(by.id('mytextinput'))).toHaveValue('I typed this');
    await element(by.id('mytextinput')).replaceText('Something else');
  });
});
