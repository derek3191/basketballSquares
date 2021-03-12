const { reloadApp } = require('detox-expo-helpers');

describe('Creating a message', () => {
    beforeEach(async() => {
        await reloadApp();
    });

    it('should add the message to the list', async () => {
        await element(by.id('messageText')).tap();
        await element(by.id('messageText')).typeText('New Message');
        await element(by.id('sendButton')).tap();
        await expect(element(by.id('messageText'))).toHaveText('');
        await expect(element(by.label('New Message'))).toBeVisible();
    });
});