/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-08 17:06:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 17:52:36
 */
const superagent = require('superagent');
const cheerio = require('cheerio');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
// https://www.52bqg.com/xuanhuan/

const getBookList = () => {

  superagent.get('https://www.52bqg.com/xuanhuan/').end((err, res) => {
    if (err) {
      // 如果访问失败或者出错，会这行这里
      return err
    } else {
      return getBooks(res)
      // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
    }
  });
  // nightmare
  //   .goto('https://www.52bqg.com/xuanhuan/')
  //   .wait("div#newscontent")
  //   .evaluate(() => document.querySelector("div#newscontent").innerHTML)
  //   .then(htmlStr => {
  //     // 获取本地新闻数据
  //     console.log(htmlStr)
  //     // localNews = getLocalNews(htmlStr)
  //   })
  //   .catch(error => {
  //   })
  let getBooks = (res) => {
    let books = [];

    // 访问成功，请求页面所返回的数据会包含在res.text中。

    /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
       以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
     */
    let $ = cheerio.load(res.text);

    // 找到目标数据所在的页面元素，获取数据
    $('div#newscontent ul li span.s2 a').each((idx, ele) => {
      // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
      // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
      let news = {
        title: $(ele).text(),        // 获取新闻标题
        href: $(ele).attr('href')    // 获取新闻网页链接
      };
      books.push(news)              // 存入最终结果数组
    });
    return books
  };
}

module.exports = getBookList
