<template>
    <div class="recommend">
        <Scroll @scroll="scroll" 
            :topShow="topShow" 
            ref="scroll" 
            class="recommend-content" 
            :data="rankList" 
            :probeType="probeType" 
            :listenScroll="listenScroll"
            @scrollEnd="scrollEnd"
        >
            <div>
                <div class="slider-wrapper" v-if="sliderDist.length">
                    <slider>
                        <div v-for="item in sliderDist">
                            <a :href="item.url">
                                <img :src="item.pic" >
                            </a>
                        </div>
                    </slider>
                </div>
                <BillBoard :billBorad="billBorad"></BillBoard>
                <RankIng :rankList="rankList" v-if="rankList.length"></RankIng>
                <bfooter></bfooter>
            </div>
        </Scroll>
    </div>
</template>
<script>
    import Slider from 'base/slider/slider'
    import RankIng from 'base/ranking/ranking'
    import Scroll from 'base/scroll/scroll'
    import Bfooter from 'components/bfooter/bfooter'
    import BillBoard from 'base/billboard/billboard'
    
    import {getSliderList,getRanking,getBillBoard} from 'api/recommend'

    const MAX_SCROLL = -300

    export default{
        data(){
            return {
                sliderDist:[],
                billBorad:[],
                rankList:[],
                show:false,
                listenScroll:true,
                scrollY:0,
                probeType:2,
                flag:true,
                topShow:true
            }
        },
        created(){
            setTimeout(()=>{
                this._getSliderList()
                this._rankIng()
                this._getBillBoard()
            },20)
        },
        methods:{
            _getSliderList(){
                getSliderList().then((res)=>{
                    this.sliderDist = res.data
                })
            },
            _rankIng(){
                getRanking().then((res)=>{
                   for(let i in res.data){
                       this.rankList.push(res.data[i])
                   }
                })
            },
            _getBillBoard(){
                getBillBoard().then((res)=>{
                    if(res.code === 0){
                        this.billBorad = res.data.archives
                    }
                })
            },
            scrollTop(){
                this.$refs.scroll.scrollTo(0,0,2000)
                this.show = false
            },
            scrollEnd(pos){
               if(pos.y >= MAX_SCROLL){
                this.show = false
               }
            },
            scroll(pos){
                if(this.flag){
                    this.$refs.scroll.refresh()
                    this.flag = false
                }
                if(pos.y >= 0){
                     this.show = false
                }
               this.scrollY = pos.y
               if(this.scrollY < MAX_SCROLL){
                    this.show = true
               }else{
                   this.show = false
               }
            }
        },
        components:{
            Slider,
            RankIng,
            Bfooter,
            Scroll,
            BillBoard
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .recommend
        position: absolute;
        left: 0;
        top: 3.797rem;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background:#f4f4f4
        .recommend-content
            height: 100%
            overflow: hidden
            .slider-wrapper
                position: relative
                width: 100%
                overflow: hidden
                img
                    display:block;
                    width:100%

</style>