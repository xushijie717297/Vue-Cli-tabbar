<template>
  <div class="home">
    <div class="top">
      <div class="box" @click="jump">
      </div>
    我是首页
    </div>
  </div>
  
</template>
<script>
export default {
  name: "Home",
  data () {
    return {
      day:null
    }
  },
  methods: {
    getDaysDiffBetweenDates(dateInitial, dateFinal){
      console.log(dateInitial, dateFinal)
     this.day = (dateFinal - dateInitial) / (1000 * 3600 * 24)
    },
    jump(){
      var id = "1111";
      this.$router.push({
        name: 'luyou',
        params: {
        id: id
      }
})
    }   
  },
  mounted () {
    this.getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22'))
    console.log(this.day)
  }
};
</script>
<style scoped  lang="less">
@r: 1rem/37.5;
  .home{
    height: 100%;
    width: 100%;
    border: 1px solid red;
    box-sizing: border-box;
    background-color: antiquewhite;
  }
  .home::after {
    display :block;
    content:'';
    width: 100%;
    height: 50px;
    background-color: black;
  }
  .top{
     /* @cap: 50px;
    height: calc(~"100% - @{cap}");less中的写法 */
    height: calc(100% - 50px);
    background-color: aqua;
  }
  .box{
    height: 50*@r;
    width: 50*@r;
    background: red;
  }
</style>
