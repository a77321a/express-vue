<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-12 17:39:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 16:22:51
 -->
<template>
  <div>
    <div class="read-text" v-html="bookText"></div>
  </div>
</template>

<script>
export default {
  name: "Read",
  data() {
    return {
      bookText: ""
    };
  },
  created() {
    this.handleGetBookText();
  },
  methods: {
    handleGetBookText() {
      this.$http
        .post("/readtext", {
          href: this.$route.query.href
        })
        .then(res => {
          this.bookText = res;
        });
    }
  }
};
</script>
<!-- <style>
#app {
  overflow: hidden;
}
</style> -->
<style scoped>
.read-text {
  column-width: 375px;
  height: 812px;
  /* 最多4列 */
}
</style>
