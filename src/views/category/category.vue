<template>
	<div class="category">
		<h2 style="height: 200px;background-color: #fff;">分类</h2>
		<h2 style="height: 200px;background-color: #fff;">分类</h2>
		<p style="height: 200px;background-color: #fff;">分类</p>
		<p style="height: 200px;background-color: #fff;border: 1px solid red;">分类</p>
		
	</div>
  
</template>
<script>
export default {
  name: "Category"
};
</script>
<style scoped>
	.category{
		height: 100%;
		width: 100%;
		background-color: red;
	}
	.category:after {
		display :block;
	    content:'';
		width: 100%;
	    height: 50px;
		background-color: black;
		}
</style>
