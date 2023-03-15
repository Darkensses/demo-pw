const { test, expect } = require('@playwright/test');

// 1. npx playwright test
// 2. npx playwright test demo.spec.js
// 3. npx playwright test demo.spec.js --headed
// 4. npx playwright test demo.spec.js --headed --project=chromium
// 5. npx playwright test demo.spec.js --config=pw.chrome.config.js

//test.describe.configure({ mode: 'serial' });


test('Navigate to demo page', async({page}) => {       
    await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html'); 
    await expect(page).toHaveTitle('Dynamic Buttons');
});

test('Checking title text', async({page}) => {
    await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html');
    const title = await page.locator('//h1');
    await expect(title).toHaveText('Simple Dynamic Buttons');
});

test('Checking title text no web-assertion', async({page}) => {
    await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html');
    const title = await page.locator('//h1').innerText();
    expect(title).toContain('Dynamic');
});

test('Description container should have a blue background', async({page}) => {
    await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html');
    const container = await page.locator('.explanation');
    await expect(container).toHaveCSS('background-color', 'rgb(240, 248, 255)');
});

test.afterAll(async({page}) => {
    await page.waitForTimeout(3000);
});