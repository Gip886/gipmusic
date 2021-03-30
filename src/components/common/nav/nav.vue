<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/home">首页</el-menu-item>
       <el-menu-item index="/go2">歌单</el-menu-item>
      <el-menu-item index="/go3">歌手</el-menu-item>
      <el-menu-item index="/go4">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    //  console.log(this.$route.path)
    this.$router.push(key)
    },
  },
};
</script>

<style>
</style>