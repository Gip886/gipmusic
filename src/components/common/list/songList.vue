<template>
  <div id="container">
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
          <!-- <button class="btn">播放</button>
          <button class="btn">播放</button>
          <button class="btn">播放</button>
          <button class="btn">播放</button> -->
          <el-button round icon="el-icon-caret-right">播放</el-button>
          <el-button round>收藏</el-button>
          <el-button round>评论</el-button>
          <el-button round>更多</el-button>
        </div>
      </div>
    </div>
    <div class="body-table">
      <div class="position">
        <el-table :data="trackIds" stripe highlight-current-row class="table">
          <el-table-column prop="date" width="50"></el-table-column>
          <el-table-column
            prop="name"
            label="歌曲"
            width="300"
          ></el-table-column>
          <el-table-column
            prop="songer"
            label="歌手"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="zhanji"
            label="专辑"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="时长"
            width="150"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songsData: [],
      // tags: [],
      // songlistName:'',
      // description:'',
      // playCount:'',
      songlistDetails: {},
      coverImgUrl: "",
      trackIds: [],
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
  mounted() {
    let id = this.$route.query.id;
    let that = this;
    this.$api.getSonglist(id).then(function (response) {
      // console.log(response);

      that.songsData = response.data.playlist.tracks;
      // that.getSong();

      // that.tags = response.data.playlist.tags;
      // that.songlistName=response.data.playlist.name;
      // that.description=response.data.playlist.description
      // that.playCount=response.data.playlist.playCount
      that.$set(that.songlistDetails, "tags", response.data.playlist.tags);
      that.$set(
        that.songlistDetails,
        "songlistName",
        response.data.playlist.name
      );
      that.$set(
        that.songlistDetails,
        "description",
        response.data.playlist.description
      );
      that.$set(
        that.songlistDetails,
        "playCount",
        response.data.playlist.playCount
      );
      // console.log(that.songsData);
      that.coverImgUrl = response.data.playlist.coverImgUrl;
      that.trackIds = response.data.playlist.trackIds;
      // that.getSong()
    });
  },
  methods: {
    async getSong() {
      // if(this.trackIds!=null){
      //  this.trackIds.forEach( async (element,index) => {
      //    let res= await this.$api.getSongDetails(element.id)
      //   // console.log(res)
      //   this.$set(
      //   this.songsData[index],
      //   "songer",
      //   res.data.songs[0].ar[0].name
      // );
      // this.$set(
      //   this.songsData[index],
      //   "zhuanji",
      //   res.data.songs[0].al.name
      // );
      // //  alert(this.songsData[0].songer)
      //  });
      // }
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  background-color: #f6f6f6;
  margin: auto;
  // height: 800px;
  padding-top: 50px;
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
  .body-table {
    width: 100%;
    .position {
      width: 70%;
      margin: auto;
      margin-top: 20px;
    }
    .table {
      width: 800px;
      font-size: 15px;
    }
  }
}
</style>