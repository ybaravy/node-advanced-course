const Page = require('./helpers/page');

let page;

beforeEach(async () => {
	page  = await Page.build();
	await page.goto('localhost:3000');
});

test('The header has the correct text', async () => {
	const text = await page.getContentsOf('a.brand-logo');
	await expect(text).toEqual('Blogster');
});

test('click on login button', async () => {
	await page.click('.right a');
	const url = new Promise((res) => res(page.url()));
	expect(url).resolves.toMatch(/accounts\.google\.com/);
});

test('When signed in, shows logout button', async () => {
	await page.login();
	const logout = await page.getContentsOf('a[href="/auth/logout"]');
	expect(logout).toEqual('Logout');
});

afterEach(async () => {
	await page.close();
});