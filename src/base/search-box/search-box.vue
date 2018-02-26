<template>
    <div class="search-b">
        <div class="index_search">
            <i class="index_search_icon"></i>
            <input type="search" @keyup.enter="enter(query)" autocomplete="off"  v-model="query" class="search-input" :placeholder="placeholder" maxlength="33">
            <i class="index_close" v-show="query" @click="close"></i>
        </div>
        <div class="index__cancelBtn" @click="back">
            <p>取消</p>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default{
        props:{
			placeholder:{
				type:String,
				default:'搜索视频、番剧、UP主或AV号'
			},
            queryx:{
                type:String,
                default:''
            }
		},
        data(){
            return {
                query:'',
                historyList:{
                    list:[]
                }
            }
        },
        created(){
            this.$watch('query',(newQuery)=>{
                this.$emit('query',newQuery)
            })
        },
        methods:{
            back(){
                this.setSearchShow(false)
            },
            enter(query){
               alert('接口暂不支持搜索')
               this.setHistory(query)
            },
            close(){
                this.query = ''
            },
            ...mapMutations({
                setHistory:'SET_HISTORY',
                setSearchShow:'SET_SEARCH_SHOW'
            })
        },
        watch:{
            queryx(newVal){
                this.query = newVal
            }
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .search-b
        position: fixed;
        width: 93%;
        top: 0;
        left: 0;
        height: 1.8rem;
        padding: 0 3.33%;
        background-color: #fff;
        z-index: 1;
        &::before
            content: "";
            display: block;
            height: 0;
            clear: both;
        .index_search
            position: relative;
            width: 88.29%;
            height: 1.28rem;
            margin-top: .30rem;
            float: left;
            .index_search_icon
                position: absolute;
                width: .94rem;
                height: .94rem;
                top: .17rem;
                left: .51rem;
                background: url(search-pro.png) no-repeat;
                background-size: 100% 100%;
            .search-input
                display: block;
                width: 100%;
                height: 100%;
                padding-left: 1.70rem;
                padding-right:.4rem;
                box-sizing: border-box;
                font-size: .55rem;
                border: .02133rem solid #e7e7e7;
                border-radius: .17rem;
                background-color: #f4f4f4;
                color: #505050;
                cursor: auto;
            .index_close
                position: absolute;
                width: 1.28rem;
                height: 1.28rem;
                top: 0;
                right: 0;
                background: url(./search-close.png) no-repeat;
                background-size: .60rem .60rem;
                background-position: 46.7% 46.7%;
                z-index:10
        .index__cancelBtn
            position: relative;
            float: right;
            width: 1.28rem;
            margin-top: .64rem;
            p
                text-align: right;
                color: #fb7299;
                font-size: .60rem;
                line-height: .60rem;
</style>