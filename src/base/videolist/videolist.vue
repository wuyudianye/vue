<template>
    <div class="videolistbox">
        <h3>视频相关</h3>
        <div class="list-box">
            <a href="javascript:;" @click="onPlayer(item)" class="item" v-for="(item,index) in getData()" v-if="index < dat.length">
                <span class="img_wrap">
                    <img :src="item.pic" alt="">
                </span>
                <div>
                    <span class="index_titlx">{{item.title}}</span>
                    <span class="index_upName">UP主：{{item.owner.name}}</span>
                </div>
                <div class="index_infowrap_s">
                    <span class="index_num">播放：{{_getPlay(item.stat.view)}}</span>
                    <span class="index_view">弹幕:{{_getPlay(item.stat.danmaku)}}</span>
                </div>
            </a>
        </div>
        <div class="index__loadMore" v-show="flag" @click="moreLoad">刚刚看到这里，点击加载更多~</div>
    </div>
</template>
<script>
    import {getPlay} from 'common/js/dom'
    import {mapMutations,mapActions} from 'vuex'
    const NUM = 6
    const NEWNUM = 20
    export default{
        props:{
            videoList:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                dat:[],
                msg:5,
                flag:true
            }
        },
        created(){
            this.dat = new Array(this.msg)
        },
        methods:{
            _getPlay(item){
                return getPlay(item)
            },
            moreLoad(){
                this.msg = 20
            },
            getData(){
                return this.videoList
            },
            onPlayer(item){
                this.setPlayer(item)
                this.$router.push('play')
                this.settab(false)
                this.$emit('onTop')
            },
            ...mapMutations({
                settab:'SET_TAB'
            }),
            ...mapActions([
                'setPlayer'
            ])
        },
        watch:{
            msg(newY){
                this.flag = false
               this.dat = new Array(this.msg)
               this.getData()
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .videolistbox
        padding: 1.024rem 0 0;
        background-color: #f3f3f3;
        h3
            padding-left: .51rem;
            margin-bottom: .43rem;
            font-size: .64rem;
            font-weight: 400;
        .index__loadMore
            margin-top: .51rem;
            width: 100%;
            line-height: 1.73rem;
            font-size: .55rem;
            color: #fb7299;
            background-color: #e7e7e7;
            text-align: center;
        .list-box
            padding: 0 .512rem;
            overflow:hidden;
            .item
                display: block;
                position: relative;
                padding: .43rem 0 .43rem 5.5rem;
                height: 3.11rem;
                overflow: hidden;
                border-top: .02rem solid #ccc;
                .img_wrap
                    position: absolute;
                    top: .43rem;
                    left: 0;
                    width: 5rem;
                    height: 3.11rem;
                    border-radius: .13rem;
                    overflow: hidden;
                    img
                        width: 100%;
                        height: 100%;
                div
                    .index_titlx
                        display: block;
                        margin-top: -.085rem;
                        margin-bottom: .17rem;
                        max-height: 1.54rem;
                        line-height: .77rem;
                        font-size: .59rem;
                        color: #212121;
                        overflow: hidden;
                    .index_upName
                        display: block;
                        margin-bottom: .17rem;
                        line-height: .68rem;
                        font-size: .51rem;
                        color: #757575;
                .index_infowrap_s
                    line-height: .68rem;
                    font-size: .51rem;
                    color: #757575;
                    .index_num
                        float: left;
                        width: 50%;
                        line-height: .68rem;
                        font-size: .51rem;
                        color: #757575;
                    .index_view
                        float: left;
                        width: 50%;
                        line-height: .68rem;
                        font-size: .512rem;
                        color: #757575;
            .item:first-child
                border-top: none;
</style>