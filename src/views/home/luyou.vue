<template>
<div class="main">
  <h2 @click="aaa">我的</h2>
  <input type="text" v-model="num">
  <button @click="judge"></button>
</div>
</template>
<script>
export default {
  name: "luyou",
  data () {
      return {
          num:'asd'
      }
  },
  methods: {
      aaa(){
        var aa = this.$route.params.id
        console.log(aa)
      },
      isPlalindrome(){//实现一个函数，判断输入是不是回文字符串
        if (typeof this.num !== 'string') return false;
          return this.num.split('').reverse().join('') === this.num;
      },
      judge(){
        console.log(this.isPlalindrome())
        
      }
  },
  mounted () {
      
  }
};
</script>
<style scoped>

.main{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #cecece;
}
button{
  height: 20px;
  width: 20px;
  display: block;
  background: red;
}
</style>
