<template>
  <div class="showpage">
      <v-swiper class="swiper" :message= "banner"></v-swiper>
      <div class="banner-item">
            <div class="item follow">
                <img src="../assets/image/heart.png" alt="" class="ico">
                <p class="item-info">关注主播</p>
            </div>
            <div class="item center">
                <img src="../assets/image/world.png" alt="" class="ico">
                <p class="item-info">直播中心</p>
            </div>
            <div class="item search">
                <img src="../assets/image/search.png" alt="" class="ico">
                <p class="item-info">搜索直播</p>
            </div>
            <div class="item classification">
                <img src="../assets/image/sort.png" alt="" class="ico">
                <p class="item-info">全部分类</p>
            </div>
      </div>
      <p class="totalshow">
          <img src="../assets/image/video.png" alt="">
          <span class="recommond">推荐主播</span>
          <span class="right">当前<span class="totalNum">5849</span>个主播  ></span>
      </p>
   
      <transition name="fade">
            <div class="mask" v-show="isAbout"></div>                       
      </transition>
    
      <div class="show-content">
        <div class="showItem col-xs-6" @click="showDetail(item.archive.aid)" v-for="item in showList" key="item.archive.aid">
            <img :src="item.pic" alt="" class="showImg">    
            <div class="showInfo">
                <span class="showTag">#{{item.archive.tname}}#</span>
                <span class="showTitle">{{item.archive.title}}</span>
                <div class="showUser">
                    <span class="showAuthor">{{item.archive.owner.name}}</span>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <span class="showNum">{{item.archive.stat.view}}</span>
                </div>
            </div>
       </div>
      </div>
  </div>
</template>

<script>
import vSwiper from '@/components/swiper.vue'
export default {
    data () {
        return {
            props: {
                banner: Object 
             }
        }
    },
    components: {
        vSwiper,
    },
    computed: {
        showList() {
             return this.$store.state.showList;      
        },
        banner() {
            return this.$store.state.banner;  
        }
    },
    mounted () {
         this.axios.get('/api/show-list').then(res => {
                this.$store.state.showList = res.data.data;
             }).catch((error) => {
                console.log(error)
        })
         this.axios.get('/api/banner').then(res => {
                this.$store.state.banner = res.data.data;
             }).catch((error) => {
                console.log(error)
        })
    },
    methods: {
         showDetail(aid) {
             this.$store.state.displayHeader = false;
             this.$router.push(
                 {name: 'showPlay', params: {'aid': aid}}
             )
         },
       
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/css/show.scss';

</style>