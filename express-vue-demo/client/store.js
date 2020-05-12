/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-05-12 17:27:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 17:45:35
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chapter: [], //当前阅读的章节列表，用于某一章最后一页时加载
    index: 0,
    url: 'http://www.xbiquge.la/'
  },
  mutations: {
    /**
     * 操作token
     *  */
    SET_CHAPTER (state, arr) {
      state.chapter = arr
    }
  },
  actions: {

  }
});