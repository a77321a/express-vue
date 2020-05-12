/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-08 17:06:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 16:56:17
 */
const superagent = require('superagent');
const charset = require('superagent-charset');
const cheerio = require('cheerio');
charset(superagent);
let handleFormatBookDetail = (res) => {
  let book = {};
  let $ = cheerio.load(res.text);
  book.title = $('#info h1').text()
  book.cover = $('#fmimg img').attr('src')
  // console.log($('#info h1').next().text())
  book.author = $('#info h1').next().text()
  book.chapters = []
  $('div#list a').each((idx, ele) => {
    let chapter = {
      name: $(ele).text(),
      href: $(ele).attr('href')
    };
    book.chapters.push(chapter)              // 存入最终结果数组
  });
  return book
};
const getBookList = (url, param) => {
  superagent.get(url).end((err, res) => {
    if (err) {
      // 如果访问失败或者出错，会这行这里
      return err
    } else {
      let bookList = handleFormatBookDetail(res)

      param.send(bookList)
    }
  });
}


module.exports = getBookList
