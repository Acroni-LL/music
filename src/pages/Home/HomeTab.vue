<template>
  <div>
    <tabs :currentIndex="currentIndex" @changTab="getCurrentIndex">
      <tab
        :index="index + 1"
        :tabName="element.billboard.name"
        v-for="(element, index) in allMusic"
        key="index"
      >
        <div class="panel hotsongs on">
          <ul class="list">
            <router-link
              :to="{ name: 'Player', params: { music_id: item.song_id } }"
              tag="li"
              class="song url"
              v-for="(item, index) in element.song_list"
              :key="index"
            >
              <div class="poster">
                <img :src="item.pic_big" :alt="item.title" />
              </div>
              <div class="info">
                <div class="name">{{ item.title }}</div>
                <div class="author">{{ item.artist_name }}</div>
              </div>
            </router-link>
          </ul>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import axios from "../../utils/http";

export default {
  data() {
    return {
      currentIndex: "1",
      allMusic: [],
    };
  },
  methods: {
    getCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    const _this = this;
    function newMusic() {
      return _this.$api.getTabsMusic({
        method: "baidu.ting.billboard.billList",
        type: 1,
        size: 5,
        offset: 0,
      });
    }
    function hotMusic() {
      return _this.$api.getTabsMusic({
        method: "baidu.ting.billboard.billList",
        type: 2,
        size: 5,
        offset: 0,
      });
    }
    function oldMusic() {
      return _this.$api.getTabsMusic({
        method: "baidu.ting.billboard.billList",
        type: 22,
        size: 5,
        offset: 0,
      });
    }
    this.$axios.all([newMusic(), hotMusic(), oldMusic()]).then(
      this.$axios.spread(function (hotMusic, newMusic, oldMusic) {
        _this.allMusic.push(hotMusic.data, newMusic.data, oldMusic.data);
        console.log(_this.allMusic);
      })
    );
  },
};
</script>

<style scoped>
.tabs {
  padding: 10px;
  background: #fff;
}
.musictop {
  background: #fff;
  padding: 10px;
}

.panel {
  border-top: 1px solid #eee;
  position: relative;
  top: -1px;
  display: block;
  background: #fff;
}

.list {
  padding-top: 0;
  height: 375px;
}

.panel .list li {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 0;
  display: flex;
  padding-top: 10px;
}

.panel .list li .poster {
  position: relative;
  width: 45px;
  margin-right: 8px;
}

.panel .list li .poster img {
  border: 1px solid #eee;
}
.info {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #333;
}

.info .author {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.more-songs {
  color: #999;
  margin-top: 9px;
  font-size: 12px;
  text-align: center;
  height: 32px;
  line-height: 32px;
}
</style>
