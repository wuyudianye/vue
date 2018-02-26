<template>
  <div id="app">
      <bheader v-show="header"></bheader>
      <transition name="tablist">
          <show-tab v-show="show" @notabId="notabId" @notablist="notablist"></show-tab>
      </transition>
       <transition name="searchshow">
          <Search v-show="searchshow"></Search>
       </transition>
      <tab v-show="tab" @showtablist="showtablist" :id="id"></tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

import Bheader from 'components/bheader/bheader'
import Tab from 'components/tab/tab'
import ShowTab from 'components/showtab/showtab'
import Search from 'components/search/search'
import {mapGetters} from 'vuex'

export default {
    data(){
      return {
        show:false,
        id:0
      }
    },
    methods:{
      showtablist(){
       this.show = !this.show
      },
      notablist(){
       this.show = !this.show
      },
      notabId(item){
        this.id = item.id
        this.show = !this.show
      }
    },
    computed:{
      ...mapGetters([
        'searchshow',
        'tab',
        'header'
      ])
    },
  	components:{
  		Bheader,
      Tab,
      ShowTab,
      Search
  	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    background:#f4f4f4
  .tablist-enter-active,.tablist-leave-active
    transition:all 0.3s
  .tablist-enter,.tablist-leave-to
    transform:translate3d(0,-100%,0)
  .rankshow-enter-active,.rankshow-leave-active
    transition:all 0.3s
  .rankshow-enter,.rankshow-leave-to
    transform:translate3d(100%,0,0)
  .searchshow-enter-active,.searchshow-leave-active
    transition:all 0.3s
  .searchshow-enter,.searchshow-leave-to
    transform:translate3d(100%,0,0)
</style>
