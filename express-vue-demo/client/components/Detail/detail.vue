<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-09 18:12:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 17:50:10
 -->
<template>
  <div>
    <van-card :thumb="book.cover" :desc="book.author" :title="book.title" />
    <van-cell
      v-for="(item, index) in book.chapters"
      :key="index"
      @click="handleToRead(item, index)"
      :title="item.name"
    />
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      book: {
        author: "",
        title: "",
        chapters: [],
        cover: ""
      }
    };
  },
  created() {
    this.handleGetBookDetail();
  },
  methods: {
    handleGetBookDetail() {
      this.$http
        .post("/bookdetail", {
          href: this.$route.query.href
        })
        .then(res => {
          this.book = res;
          // this.book.chapters.forEach(i=>{
          // i.chapNum = i.split('  ')[0]
          // i.chapName = i.split('  ')[1]
          // })
        });
    },
    handleToRead(item, index) {
      this.$store.commit("SET_CHAPTER", this.book.chapters);
      this.$router.push({
        name: "Read",
        query: {
          href: this.$store.state.url + item.href,
          chapter_index: index
        }
      });
    }
  }
};
</script>

<style scoped>
.van-card__title {
  font-size: 20px;
  max-height: none;
  line-height: 3;
  height: auto;
}
</style>
