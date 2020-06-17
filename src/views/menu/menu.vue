<template>
  <div id="menu">
    <router-view></router-view>
	<!-- <div class="box" style="height: 50px;width: 100%"></div> -->
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/iconfont/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="../../assets/img/iconfont/home_active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../../assets/img/iconfont/category.png" alt="" />
        <img
          slot="item-icon-active"
          src="../../assets/img/iconfont/category_active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="../../assets/img/iconfont/shopcart.png" alt="" />
        <img
          slot="item-icon-active"
          src="../../assets/img/iconfont/shopcart_active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../../assets/img/iconfont/profile.png" alt="" />
        <img
          slot="item-icon-active"
          src="../../assets/img/iconfont/profile_active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "../../components/tabbar/tabbar";
import TabBarItem from "../../components/tabbar/tabbarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
    mounted() {

    }
};
</script>
<style>
/* @import "../assets/css/base.css"; */
#menu{
    height: 100%;
    width: 100%;
}
</style>
