<template>
<div class="warning">
  <div class="main">
    <h2>{{msg}}</h2>
    <ul>
        <li v-for="(item) in data" :key="item.key" @click="jump(item.only,item.state)">
            <img :src="item.url" alt="">
            <p>{{item.name}}</p>
        </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: "Shopcart",
  data () {
    return {
      data:[
        {"url":'../../../static/image/bj.png',"name":"单点超限","state":"aa","only":0,"key":0,"show":true},
        {"url":'../../../static/image/bj.png',"name":"单点超限","state":"ee","only":1,"key":4,"show":false},
        {"url":'../../../static/image/bj.png',"name":"单点超限","state":"bb","only":0,"key":1,"show":true},
        {"url":'../../../static/image/bj.png',"name":"单点超限","state":"cc","only":1,"key":2,"show":true},
        {"url":'../../../static/image/bj.png',"name":"单点超限","state":"dd","only":1,"key":3,"show":true},
        {"url":'../../../static/image/bj.png',"name":"duo点超限","state":"ee","only":1,"key":5,"show":true},
        // {"url":'../../../static/image/bj.png',"name":"单点超限","state":"ff","only":1,"key":6,"show":true},
        // {"url":'../../../static/image/bj.png',"name":"单点超限","state":"gg","only":1,"key":7,"show":true},
        // {"url":'../../../static/image/bj.png',"name":"单点超限","state":"hh","only":1,"key":8,"show":true},

      ],
      msg:"预警",
    }
  },
  methods: {
    jump(only,state){//state路由标识
        console.log(only,state);
        var path = state;
        var only = only;
        switch(only){
          case 1://公共路由
            this.$router.push({path:'/warn',query:{index:state}});
            break;
          case 0://单一路由
            this.$router.push(path);
            break;
        }
    }
  },
  mounted () {
    for(let i = 0;i<this.data.length;i++){
      console.log(this.data[i].show)
      if(this.data[i].show==false){
        this.data.splice(i,1)
      }
    }
  }
};
</script>
<style scoped lang="less">
@r:1rem/37.5;
  .warning{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .warning::after {
    display :block;
    content:'';
    width: 100%;
    height: 50px;
    background-color: black;
  }
  .main{
    height:calc(100% - 50px);
    width: 100%;
    background: #cecece;
    display: flex;
    flex-direction: column;
  }
  h2{
    height: 45*@r;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c3c3c3;
  }
  ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 160*@r;
    li{
      height: 80*@r;
      width: 24%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // background: red;
      p::first-letter{
        color: red;
        font-size: 24px;
      }
    };
    li:last-child:nth-child(4n - 1) {
      margin-right: calc(24% + 4% / 3);
    };
    li:last-child:nth-child(4n - 2) {
      margin-right: calc(48% + 8% / 3);
    };
    li:last-child:nth-child(4n - 3) {
      margin-right: calc(72% + 12% / 3);
    }
  }

</style>
