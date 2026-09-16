const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  page.on('pageerror', e => console.log('PAGE ERR:', e.message));
  page.on('console', m => {if(m.type()==='error') console.log('CONSOLE ERR:', m.text())});
  await page.goto('http://localhost:8000/index.html');
  await new Promise(r => setTimeout(r, 500));
  const btns = await page.$$('button');
  console.log('buttons: ' + btns.length);
  for(let b of btns) { await b.evaluate(el => el.click()); }
  await page.evaluate(() => {
    document.querySelectorAll('select').forEach(s => s.dispatchEvent(new Event('change')));
  });
  await new Promise(r => setTimeout(r, 500));
  console.log('done');
  await browser.close();
})();
