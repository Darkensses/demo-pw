const { test, expect } = require('@playwright/test');

let page;
test.describe.configure({ mode: 'serial' });

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html'); 
})

test('Navigate to demo page', async() => {       
    await expect(page).toHaveTitle('Dynamic Buttons');
});

test('Check title text', async() => {    
    const title = await page.locator('//h1');
    await expect(title).toHaveText('Simple Dynamic Buttons');
});

test('Check title text no web-assertion', async() => {        
    const title = await page.locator('//h1').innerText();
    expect(title).toContain('Dynamic');
});

test('Check p text for click instruction', async () => {
    const p = page.locator('//p');
    await expect(p.nth(1)).toHaveText('Click all 4 buttons.');
});

test('P count should be 4', async () => {
    const p = page.locator('//p'); // return 4 elements
    await expect(p).toHaveCount(4);
});

test('Description container should have a blue background', async() => {
    const container = await page.locator('.explanation');
    await expect(container).toHaveCSS('background-color', 'rgb(240, 248, 255)');
});

test('Click the first button', async() => {
    const button = await page.locator('#button00');
    console.log(await button.innerText());
    await button.click();
});

test('Click the second button', async() => {
    const button = await page.locator('#button01');
    console.log(await button.innerText());
    await button.click();
});

test('Click the third button', async() => {
    const button = await page.locator('#button02');
    console.log(await button.innerText());
    await button.click();
});

test('Click the fourth button', async() => {
    const button = await page.locator('#button03');
    console.log(await button.innerText());
    await button.click();
});

test.afterAll(async() => {
    await page.waitForTimeout(3000);
    await page.close();
});