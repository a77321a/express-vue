/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-08 17:06:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 16:25:40
 */
const superagent = require('superagent');
const charset = require('superagent-charset');
const cheerio = require('cheerio');
// const Nightmare = require('nightmare');
// const nightmare = Nightmare({ show: true });
charset(superagent);
// https://www.52bqg.com/xuanhuan/
let handleFomatBookList = (res) => {
  let books = [];
  // 访问成功，请求页面所返回的数据会包含在res.text中。
  /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
     以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
   */
  let $ = cheerio.load(res.text);
  // 找到目标数据所在的页面元素，获取数据
  $('div#newscontent ul li').each((idx, ele) => {
    // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
    // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
    $(ele).find('span.s2 a')
    let news = {
      title: $(ele).find('span.s2 a').text(),        // 获取标题标题
      href: $(ele).find('span.s2 a').attr('href'),    // 获取网页链接,
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
      let bookList = handleFomatBookList(res)
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
