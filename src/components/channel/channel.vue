<template>
    <div class="channel">
        <transition name="nav">
            <navigation v-show="show" @getList="getList" :tid="tid"></navigation>
        </transition>
        <div class="mad" ref="mad">
            <scroll class="mad-content" ref="scroll" 
                @scroll="scroll" 
                :data="list" 
                :pullup="pullup" 
                :listenScroll="listenScroll" 
                :probeType="probeType" 
                @scrollEnd="scrollEnd"
            >
                <div>
                    <list :list="list"></list>
                </div>
            </scroll>
        </div>
    </div>
</template>
<script>
    import navigation from '../navigation/navigation'
    import List from 'base/list/list'
    import {getAniList} from 'api/animation'
    import Scroll  from 'base/scroll/scroll'
    import {mapGetters} from 'vuex'
    const NEW_Y = -300

    export default{
        data(){
            return {
                list:[],
                page:1,
                pullup:true,
                flag:false,
                probeType:2,
                listenScroll:true,
                show:true,
                scrollY:0,
                tid:0
            }
        },
        created(){
            if(!this.TopTlist.length){
                return
            }
            this.tid = this.TopTlist[0].tid
        },
        mounted(){
            this._getAniList()
        },
        methods:{
            _getAniList(){
                this.flag = false
                getAniList(this.tid,this.page).then((res)=>{
                    if(res.code === 0){
                        this.list = res.data.archives
                    }
                })
            },
            _getEndList(){
                this.flag = true
                getAniList(this.tid,this.page).then((res)=>{
                    if(res.code === 0){
                        this.list = this.list.concat(res.data.archives)
                    }
                    this.flag = false
                })
            },
            scrollEnd(){
                this.page++
                this._getEndList()
            },
            scroll(pos){
                this.scrollY = pos.y
                if(this.show){
                    this.$refs.mad.style.top = '5.69733rem'
                }else{
                    this.$refs.mad.style.top = '15%'
                }
            },
            getList(item){
                if(!item.tid){
                    this.tid = this.TopTlist[0].tid
                }
                this.tid = item.tid
                this._getAniList()
                this.$refs.scroll.scrollTo(0,0,20)
            }
        },
        computed:{
            ...mapGetters([
                'TopTlist',
            ])
        },
        components:{
            navigation,
            List,
            Scroll
        },
        watch:{
            TopTlist(newList){
                if(!newList.length){
                    return
                }
                this.tid = newList[0].tid
                this._getAniList()
            },
            scrollY(newY,oldY){
               if(newY > 0 && oldY >0){
                    return
               }
               if(newY < oldY){
                    this.show = false
               }else if(newY > oldY){
                    this.show = true
               }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .mad
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top:5.697rem
        overflow: hidden;
        background: #f4f4f4;
        .mad-content
            height:100%;
            overflow: hidden;
    .nav-enter-active,.nav-leave-active
        transition:all 0.3s
    .nav-enter,.nav-leave-to
        transform:translate3d(0,-100%,0)
</style>