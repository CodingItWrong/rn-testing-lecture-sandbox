describe('Lecture 6', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Lecture 6')).tap();
  });

  it('displays widgets from the server', async () => {
    await expect(element(by.text('Restaurant 1'))).toBeVisible();
    await expect(element(by.text('Restaurant 2'))).toBeVisible();
  });
});
