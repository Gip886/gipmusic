<template>
  <div class="container">
    <div class="logo">
      <a href="https://www.bilibili.com/"></a>
    </div>
    <div class="body">
      <ul class="navList">
        <li><router-link to="/" tag="a">主页</router-link></li>
        <li><router-link to="/" tag="a">我的音乐</router-link></li>
        <li><router-link to="/" tag="a">我的音乐</router-link></li>
        <li><router-link to="/" tag="a">我的音乐</router-link></li>
        <li><router-link to="/" tag="a">我的音乐</router-link></li>
      </ul>
    </div>
    <div class="state">这里是状态栏</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  width: 100%;
  height: 70px;
  box-shadow: 0 2px 3px -1px red;

  .logo {
    padding: 0;
    margin: 0 10px;
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;

    a {
      background-image: url('../../../assets/icon.jpg');
      width: 100%;
      display: block;
      height: 70px;
      background-position: 0px center;
      background-repeat: no-repeat;
      background-size: 150px 70px;
    }
  }

  .navList {
    flex: 1;
    display: flex;
    list-style: none;
    flex-direction: row;
    margin: 20px auto;

    li {
      margin: 0 25px;
      letter-spacing: 5px;
      font-size: 18px;

      a {
        text-decoration: none;
      }
    }
  }

  .state {
    flex: 1;
    width: 80px;
    background-color: blue;
  }
}
</style>

