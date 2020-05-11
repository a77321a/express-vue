<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-11 18:36:10
 -->
<template>
  <div>
    <List url="/bookList" method="get" :on-getdata="handleGetBookList">
      <van-cell
        slot="item"
        @click="handleGetBookDetail(item)"
        v-for="(item, index) in bookList"
        :key="index"
        :title="item.title"
        :value="item.author"
      />
      111
    </List>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      bookList: []
    };
  },
  created() {},
  methods: {
    handleGetBookList(data) {
      this.bookList = data;
    },
    handleGetBookDetail(item) {
      this.$router.push({
        name: "Detail",
        query: {
          href: item.href
        }
      });
    }
  }
};
</script>
