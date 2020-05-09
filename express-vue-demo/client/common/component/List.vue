<template>
  <van-list
    v-model="loading"
    :finished="finished"
    :finished-text="showText ? '没有更多了' : ''"
    immediate-check
    @load="onLoad"
  >
    <slot name="item"></slot>
    <slot name="list" :list="list"></slot>
  </van-list>
</template>

<script>
export default {
  name: "list",
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: "post"
    },
    params: {
      type: Object,
      default() {
        return {};
      }
    },
    onFormatter: {
      type: Function
    },
    onGetdata: {
      type: Function
    },
    showText: {
      type: Boolean,
      default: true
    },
    dataHanlder: {
      type: Function
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      page: 0,
      list: []
    };
  },
  created() {},
  methods: {
    // on evnet
    onLoad() {
      this.page++;
      this.requestList();
    },
    // other
    reset() {
      this.onGetdata && this.onGetdata([]);
      // finished 必须经过 true => false 的过程，list才会重新发起请求
      this.finished = true;
      this.$nextTick(() => {
        this.page = 0;
        this.finished = false;
      });
    },
    goToFirst() {
      this.finished = true;
      this.$nextTick(() => {
        this.page = 1;
        this.list = [];
        this.finished = false;
        this.requestList();
      });
    },
    // request
    requestList() {
      if (!this.url) return;
      const obj = {
        page: this.page,
        ...this.params
      };
      this.$http[this.method](this.url, obj, undefined, undefined, data => {
        this.dataHanlder && this.dataHanlder(data);
      }).then(res => {
        this.loading = false;
        let data = res;
        this.onFormatter && this.onFormatter(data.list);
        this.list = data;

        console.log(this.list);

        this.onGetdata && this.onGetdata(this.list);
        // 判断是否完成
        this.finished = true;
        // this.finished = true;
      });
    }
  }
};
</script>
