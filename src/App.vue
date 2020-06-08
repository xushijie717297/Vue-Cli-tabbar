<template>
  <div id="app">
    <router-view></router-view>
	<!-- <div class="box" style="height: 50px;width: 100%"></div> -->
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/iconfont/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/iconfont/home_active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/iconfont/category.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/iconfont/category_active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="./assets/img/iconfont/shopcart.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/iconfont/shopcart_active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/iconfont/profile.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/iconfont/profile_active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/tabbar";
import TabBarItem from "./components/tabbar/tabbarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
    beforeCreate(){
      let count = 0;
      let imgs = [
      //用require的方式添加图片地址，直接添加图片地址的话，在build打包之后会查找不到图片，因为打包之后的图片名称会有一个加密的字符串
          require('./views/404/404.gif')
      ]
      for (let img of imgs) {
          let image = new Image();
          image.src = img;
          image.onload = () => {
              count++;
          };
      }
  },
    mounted() {
      window.addEventListener('offline', ()=>{
       // 网络由正常常到异常时触发
       sessionStorage.locationUrl=window.location.href;
       this.$router.replace('/error')
      });
      window.addEventListener('online',()=>{
        window.location.href=sessionStorage.locationUrl
      });
    }
};
</script>
<style>
@import "./assets/css/base.css";
.active {
  color: red;
}
*{
	margin: 0;
	padding: 0;
}
html,body,#app{
	height: 100%;
	width: 100%;
  overflow-x: hidden;
}
#tab-bar{
	height: 50px !important;
}
::-webkit-scrollbar  
{  
	display: none!important;
    width: 0px;  
    height: 0px;  
}

</style>
