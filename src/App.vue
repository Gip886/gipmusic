<template>
  <div id="app">
    <!-- <el-container> -->
      <!-- <el-header> -->
        <navBar></navBar>
      <!-- </el-header> -->
      <!-- <el-main> -->
        <router-view></router-view>
      <!-- </el-main> -->
    <!-- </el-container> -->
    <!-- target属性去掉才可以生效 -->
  <el-backtop></el-backtop>
  </div>
</template>
<script>
import navBar from './components/common/nav/navBar'
export default ({
components:{
  navBar
}
})
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
