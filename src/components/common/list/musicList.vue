<template>
  <div class="container">
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">
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
      limit: 20,
      items: [],
    };
  },
  methods: {
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
.container{
  height: 100%;
  width: 100%;
  .items{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction:column;
    flex-flow:wrap;
    .item{
     width: 150px;
    //  height: 300px;
     margin: 20px;
     img{
       width: 150px;
       height: 150px;
     }
    }
  }
}
</style>
