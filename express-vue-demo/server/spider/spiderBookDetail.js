/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-08 17:06:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 16:56:19
 */
const superagent = require('superagent');
const charset = require('superagent-charset');
const cheerio = require('cheerio');
charset(superagent);
let handleFormatBookDetail = (res) => {
  let books = [];
  let $ = cheerio.load(res.text);
  $('div#newscontent ul li').each((idx, ele) => {
    $(ele).find('span.s2 a')
    let news = {
      title: $(ele).find('span.s2 a').text(),
      href: $(ele).find('span.s2 a').attr('href'),
      author: $(ele).find('span.s5 ').text(),
    };
    books.push(news)              // 存入最终结果数组
  });
  return books
};
const getBookList = (param, db) => {
  superagent.get('http://www.xbiquge.la/fenlei/1_1.html').end((err, res) => {
    if (err) {
      // 如果访问失败或者出错，会这行这里
      return err
    } else {
      let bookList = handleFormatBookDetail(res)
      if (bookList.length) {
        bookList.forEach(i => {
          let sql = `insert ignore into book_list(book_name,book_href,author,type) values('${i.title}','${i.href}','${i.author}','xuanhuan')`
          db.query(sql, [], () => {
            console.log('添加成功')
          })
        })
      }
      param.send(bookList)
    }
  });
}


module.exports = getBookList
