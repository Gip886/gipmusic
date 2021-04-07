<template>
  <div class="container">
    <el-table :data="songsData" stripe highlight-current-row class="table">
      <el-table-column label="序号">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="歌曲" width="300"></el-table-column>
      <el-table-column
        prop="ar[0].name"
        label="歌手"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="al.name"
        label="专辑"
        width="150"
      ></el-table-column>
      <el-table-column prop="time" label="时长" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: [ids],
  data() {
    return {
      songsData: [],
    };
  },
  mounted() {
    this.getSongs(this.ids);
  },
  methods: {
    async getSongs(ids) {
      for (let index = 0; index < ids.length; index++) {
        const element = ids[index];
        let res = await this.$api.getSongDetails(element.id);
        // ![](https://cdn.jsdelivr.net/gh/Gip886/picture/img/20210407215937.png)
        this.songsData = res.data.songs[0];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  font-size: 15px;
}
</style>