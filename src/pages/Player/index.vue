<template>
  <div class="play" v-if="playerInfo.songinfo">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p>{{ playerInfo.songInfo.title }}</p>
          <p class="author">{{ playerInfo.songinfo.author }}</p>
        </div>
      </div>

      <router-link to="/search">
        <i class="inconfont icon-sousuo right"></i
      ></router-link>
    </div>
    <div class="song-info">
      <div class="song-info-img">
        <img :src="playerInfo.songinfo.pic_radio" alt="" />
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
    <div class="song">
      <audio ref="player" :src="playerInfo.bitrate.show_link" controls></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      palyerInfo: {},
    };
  },
  mounted() {
    this.$api
      .playerData({
        method: "baidu.ting.song.play",
        songid: this.$route.params.id,
      })
      .then((res) => {
        this.palyerInfo = res.data;
        this.$nextTick(function () {
          console.log(this.$refs.player);
          this.addEventListener;
        });
      });
  },
  methods: {
    playerAddEventListen() {
      this.$refs.player.addEventListener("timeupdata", this.currentTimeHandler);
      this.$refs.player.addEventListener("canplay", this.currentTimeHandler);
    },
    playerRemoveEventListen() {
      this.$refs.player.removeEventListener(
        "timeupdata",
        this.durationTimeHandler
      );
      this.$refs.player.removeEventListener(
        "canplay",
        this.durationTimeHandler
      );
    },
    currentTimeHandler() {
      console.log(this.$refs.player.currentTime);
    },
    durationTimeHandler() {
      console.log(this.$refs.player.duration);
    },
    beforeDestroy() {
      this.playerRemoveEventListen();
    },
  },
};
</script>

<style scoped>
.header {
  padding: 15px;
}

.music-info {
  flex: 1;
  font-size: 20px;
}

.title {
  display: flex;
  text-align: center;
}

.left {
  font-size: 30px;
}

.ca {
  color: red;
}

.right {
  font-size: 30px;
}

.song-info {
  padding: 15px;
}

.song-info-img {
  text-align: center;
}

.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}

.iconbox {
  display: flex;
  margin-top: 30px;
}

.iconbox .box {
  flex: 1;
}

.song {
  width: 100%;
  text-align: center;
}

.song audio {
  width: 80%;
}

.active {
  color: #222;
}

.author {
  font-size: 12px;
  color: #999;
}
</style>

