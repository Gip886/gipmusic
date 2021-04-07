<template>
   <div class="header">
      <div class="img-container">
        <img :src="coverImgUrl" alt="" />
      </div>
      <div class="right-container">
        <div class="song-title">{{ songlistDetails.songlistName }}</div>
        <div class="autor">
          <i class="el-icon-user"></i>{{ songlistDetails.description }}
        </div>
        <div class="tag">标签：{{ getTag }}</div>
        <div class="play-num">播放量：{{ songlistDetails.playCount }}</div>
        <div class="select">
          <el-button round icon="el-icon-caret-right">播放</el-button>
          <el-button round>收藏</el-button>
          <el-button round>评论</el-button>
          <el-button round>更多</el-button>
        </div>
      </div>
</template>

<script>
export default {
  //传递歌单id
  props: [id],
  data() {
    return {
      songlistDetails: [],
    };
  },
   computed: {
    getTag() {
      let tagname = "";
      if (this.songlistDetails.tags != null) {
        this.songlistDetails.tags.forEach((tag) => {
          tagname = tagname + " " + tag;
        });
        return tagname;
      } else {
        return null;
      }
    },
  },
  methods: {
    async getSonglist(id) {
      let res = await this.$api.getSonglist(id);
      this.$set(this.songlistDetails, "tags",response.data.playlist.tags);
      this.$set(this.songlistDetails, "songlistName",response.data.playlist.name);
      this.$set(this.songlistDetails, "description",response.data.playlist.description);
      this.$set(this.songlistDetails, "playCount",response.data.playlist.playCount);
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  width: 70%;
  margin: auto;
  box-shadow: 3px 3px 5px #c2c2c2;
  &:hover {
    box-shadow: 6px 6px 6px #c2c2c2;
  }
  // margin-top: 50px;
  // position: relative;
  .img-container {
    img {
      width: 250px;
      height: 250px;
    }
  }
  .right-container {
    margin-left: 50px;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    .song-title {
      // width: 500px;
      font-size: 32px;
      height: 50px;
      line-height: 50px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 10px;
      // max-width: 100%;
    }
    .autor {
      margin-bottom: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .tag {
      margin-bottom: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .play-num {
      margin-bottom: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .select {
      margin-top: 20px;
    }
  }
}
</style>