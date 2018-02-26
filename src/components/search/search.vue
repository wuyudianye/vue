<template>
    <div class="search-box">
        <SearchBox @query="onQueryChange" :queryx="query"></SearchBox>
        <div class="index_recomme" v-show="!query">
            <p class="index_subtitle">大家都在搜</p>
            <div class="index_items">
                <div class="index_hotword" @click="onClick(item)" v-for="(item,index) in allSearch">
                    <p>{{item.keyword}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SearchBox from 'base/search-box/search-box'
    import {AllSearch} from 'api/AllSearch'
    export default{
        data(){
            return {
                allSearch:AllSearch.list,
                query:''
            }
        },
        methods:{
            onQueryChange(newQuery){
                this.query = newQuery
            },
            onClick(item){
                this.query = item.keyword
            }
        },
        components:{
            SearchBox,
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .search-box
        position:absolute;
        left:0
        right:0
        top:0px
        bottom:0
        background:#fff
        z-index:20
        .index_recomme
            position: relative;
            margin-top: 1.898rem;
            z-index: 0;
            margin-left: .533rem;
            margin-right: .149rem;
            .index_subtitle
                position: relative;
                padding-top: .682rem;
                color: #999;
                line-height: .597rem;
                font-size: .597rem;
                text-align: left;
            .index_items
                position: relative;
                width: 100%;
                margin-top: .170rem;
                margin-bottom: .683rem;
                height: 3.925rem;
                overflow: hidden;
                .index_hotword
                    position: relative;
                    float: left;
                    padding: .405rem .512rem;
                    margin-top: .512rem;
                    margin-right: .363rem;
                    border: .043rem solid #ccc;
                    border-radius: .682rem;
                    p
                        font-size: .555rem;
                        line-height: .555rem;
                        color: #505050;
                        text-align: center;
</style>