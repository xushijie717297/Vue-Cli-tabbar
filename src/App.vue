<template>
  <div id="app">
    <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "App",
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
/* html{ */
      /* filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(.1); */
/* } */
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
li{
  list-style: none;
}
</style>
