const { test, expect } = require('@playwright/test');

// test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({page}) => {
    await page.goto('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html'); 
})

test('Navigate to demo page', async({page}) => {       
    await expect(page).toHaveTitle('Dynamic Buttons');
});

test('Check title text', async({page}) => {    
    const title = await page.locator('//h1');
    await expect(title).toHaveText('Simple Dynamic Buttons');
});

test('Check title text no web-assertion', async({page}) => {        
    const title = await page.locator('//h1').innerText();
    expect(title).toContain('Dynamic');
});

test('Check p text for click instruction', async ({page}) => {
    const p = page.locator('//p');    
    //console.log(await p.count());
    await expect(p.nth(1)).toHaveText('Click all 4 buttons.');
})

test('Description container should have a blue background', async({page}) => {
    const container = await page.locator('.explanation');
    await expect(container).toHaveCSS('background-color', 'rgb(240, 248, 255)');
});

test('Click the first button', async({page}) => {
    const button = await page.locator('#button00');
    console.log(await button.innerText());
    await button.click();
});

test('Click the second button', async({page}) => {
    const button = await page.locator('#button01');
    console.log(await button.innerText());
    await button.click();
});

test.afterAll(async({page}) => {
    await page.waitForTimeout(3000);
});