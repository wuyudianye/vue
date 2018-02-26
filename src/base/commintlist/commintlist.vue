<template>
    <div class="comment">
        <h3>评论</h3>
        <div class="index_commentWrap" v-if="commintList.length && index < array.length " v-for="(list,index) in commintList">
            <div class="index_commentItem">
                <a href="" class="index_imgWrap">
                    <img class="toux" :src="list.member.avatar" alt="">
                </a>
                <a href="" class="index_upName">{{list.member.uname}}</a>
                <span class="index_commentTime">1天前</span>
                <p class="index_commentTxt">
                    {{list.content.message}}
                </p>
            </div>
        </div>
        <div v-if="!commintList.length" class="no_index_commentWrap">
            <p>暂时没有品论哦~</p>
        </div>
        <span class="downLoad">下载bilibili客户端，查看全部评论</span>
    </div>
</template>
<script>
    export default{
        props:{
            commintList:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                array:[]
            }
        },
        created(){
            this.array = new Array(7)
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .comment
        padding-top: 1.0rem;
        background-color: #f3f3f3;
        h3
            margin-bottom: .086rem;
            margin-left: .51rem;
            font-size: .64rem;
            font-weight: 400;
        .downLoad
            display: block;
            margin: .13rem .51rem 0;
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: .56rem;
            color: #fff;
            background-color: #fb7299;
            border-radius: .13rem;
            text-align: center;
        .no_index_commentWrap
            p
                text-align:center;
                padding:1.5rem 0;
                font-size: 0.57rem;
                color:#212121;
        .index_commentWrap
            padding: 0 .51rem;
            .index_commentItem
                position: relative;
                padding: .77rem 0 .67rem 2.1rem;
                min-height: 1.70rem;
                border-top: .02rem solid #ccc;
                overflow: hidden;
            .index_commentItem:first-child
                border-top: none;
                .index_imgWrap
                    position: absolute;
                    width: 1.70rem;
                    height: 1.70rem;
                    top: .77rem;
                    left: 0;
                    border-radius: 50%;
                    overflow: hidden;
                    .toux
                        width: 100%;
                        height: 100%;
                .index_upName
                    display: block;
                    max-width: 60%;
                    margin-bottom: .51rem;
                    color: #757575;
                    font-size: .55rem;
                .index_commentTime
                    position: absolute;
                    top: .81rem;
                    right: 0;
                    font-size: .47rem;
                    color: #999;
                .index_commentTxt
                    color: #212121;
                    line-height: .81rem;
                    font-size: .60rem;
</style>  