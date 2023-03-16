const { test, expect, chromium } = require('@playwright/test');

async function main() {
    const browser = await chromium.launch({
        channel: 'chrome',
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

    await page.locator('[name=username]').fill('MyUsername');
    await page.locator('[name=password]').fill('SuperPassword'); // don't use 'ñ'
    await page.locator('[name=comments]').clear();
    await page.locator('[name=comments]').fill('Me gustan los King Gizzard 👑🐊🧙‍♂️');
    await page.locator('[name=filename]').setInputFiles('path/to/file');
    await page.locator('[value=cb1]').check();
    await page.locator('[name=dropdown]').selectOption({value: 'dd3'});    
    await page.locator('[value=submit]').click();

    await expect(page.locator('#_valueusername')).toHaveText(/MyUsername/);

    await page.waitForTimeout(3000);
    await browser.close();
}

main();