<template>
  <div class="container">
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index" @click="goSonglist(items[index].id)">
        <img :src="item.picUrl" alt="" />
        <span class="details">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 24,
      items: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取推荐歌单
    async getPersonalized() {
      try {
        let res = await this.$api.getPersonalized(this.limit);
        console.log(res);
        //大哥看清楚数据格式再绑定好吧
        this.items = res.data.result;
      } catch (error) {
        console.log(error);
      }
    },
    getSonglist(id) {
      this.$api.getSonglist(id).then(function (response) {
        console.log(response);
      });
    },
    goSonglist(id){
       this.$router.push({
          path: '/songlist',
          query: {
            id: id
          }
        })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getPersonalized();
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  .items {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    .item {
      position: relative;
      width: 150px;
      //  height: 300px;
      margin: 20px;
      &:hover {
        color: red;
        &::after {
          display: inline-block;
        }
      }
      &::after {
        content: "";
        //  border: solid 1px;
        width: 40px;
        height: 40px;
        position: absolute;
        // top: 60px;
        // left: 60px;
        border-radius: 50%;
        background-image: url("../../../assets/播放.png");
        background-size: 100% 100%;
        background-color: rgba(184, 223, 12, 0.719);
        opacity: 0;
        display: none;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        // forwards:当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
        animation: playmove 1s ease-in-out forwards;
        cursor: pointer;
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}
@keyframes playmove {
  to {
    width: 60px;
    height: 60px;
    opacity: 0.8;
  }
}
</style>
