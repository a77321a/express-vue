/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-05-12 17:51:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 18:10:23
 */

const request = require('superagent');
const charset = require('superagent-charset');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

// const Nightmare = require('nightmare');
// const nightmare = new Nightmare({ show: true });
charset(request);
const getReadText = async (url, param) => {
  const browser = await puppeteer.launch({
    executablePath: puppeteer.executablePath(),
    headless: true, // 使用无头浏览器抓取
  });
  console.log('服务正常启动');
  const page = await browser.newPage();
  page.once('load', () => console.log('Page loaded!'));
  page.goto('http://localhost:8000/api/page/ceno/bc-cnso-static-new/gline/duration-warning/contact-manage', {
      waitUntil: [ 'networkidle0' ],
  });
  await page.waitForNavigation()
  console.log('页面加载');
  console.log(await page.$('body'));
  const bodyHandle = await page.$('body');
  const html = await page.evaluate(body => body.innerHTML, bodyHandle);
  console.log(html);
  await param.send(html);

}


module.exports = getReadText
