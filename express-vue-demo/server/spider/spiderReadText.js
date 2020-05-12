/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-05-12 17:51:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 18:10:23
 */

const superagent = require('superagent');
const charset = require('superagent-charset');
const cheerio = require('cheerio');
charset(superagent);
let handleFormatText = (res) => {
  let $ = cheerio.load(res.text);
  $('div#content').find('p').remove()
  let text = $('div#content').html()
  console.log(text)
  return text
};
const getBookList = (url, param) => {
  superagent.get(url).end((err, res) => {
    if (err) {
      // 如果访问失败或者出错，会这行这里
      return err
    } else {
      let text = handleFormatText(res)
      param.send(text)
    }
  });
}


module.exports = getBookList
