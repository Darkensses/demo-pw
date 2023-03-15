const { test, expect } = require('@playwright/test');

let page;
let requests = [];
let responses = [];

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto('https://testpages.herokuapp.com/styled/sync/xhttp-messages.html');
    page.on('request', request => {
        console.log('>>', request.method(), request.url());
        requests.push(request);
    });
    //page.on('response', response => console.log('<<', response.status(), response.url()));
    page.on('response', response => responses.push(response));
});

test('Check there is no left message', async() => {
    const msg = await page.locator('#messagecount');
    await expect(msg).toHaveText(/Message Count: 0 : 0/, {timeout: 40000});
    
    console.log('length: ', requests.length, responses.length)
    expect(responses[0].status()).toBe(200);
    expect(requests.length).toBe(responses.length);
});

