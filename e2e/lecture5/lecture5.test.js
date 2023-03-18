describe('Lecture 5', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Lecture 5')).tap();
  });

  it('detects text', async () => {
    //...
  });

  it('allows tapping buttons', async () => {
    //...
  });

  it('allows typing into text fields', async () => {
    //...
  });
});
