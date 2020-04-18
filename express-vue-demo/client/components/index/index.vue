<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-18 16:18:02
 -->
<template>
  <div></div>
</template>
<style scoped>
.fal {
  display: inline-flex;
  height: 100px;
  background-color: azure;
}
.son {
  height: 90px;
  width: 90px;
  margin-right: 10px;
  background: #000;
  color: #fff;
}
</style>
<script>
import { getUser } from './api'
export default {
  name: 'index',
  data() {
    return {
      userName: '',
      userId: '',
      roomList: [
        { name: 'room1', child: [{ name: 'roomc1' }] },
        {
          name: 'room2',
          child: [{ name: 'roomc2' }, { name: 'roomc2' }, { name: 'roomc2' }]
        },
        { name: 'room3', child: [{ name: 'roomc3' }, { name: 'roomc3' }] },
        {
          name: 'room4',
          child: [{ name: 'roomc4' }, { name: 'roomc4' }, { name: 'roomc4' }]
        }
      ]
    }
  },
  created() {
    // this.getUser()
  },
  methods: {
    // getUser() {
    //   getUser().then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>
