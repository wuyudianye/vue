<template>
    <div class="showtab">
        <div class="tab-list">
             <router-link class="a"
                :class="{active:item.id == ClsId}" 
                :to="{ path:item.url }" 
                :key="item.id" 
                v-for="(item,index) in list"
                ><p @click="getClass(item)">{{item.title}}</p></router-link>
        </div>
        <div class="tab-btn" @click="notablist">
            <img src="./xlk.png" alt="">
        </div>
    </div>
</template>
<script>
    
    import {TopList} from 'common/js/config'
    import {mapMutations,mapGetters} from 'vuex'
    export default{
        data(){
            return {
                 list:TopList,
                 ClsId:0
            }
        },
        methods:{
            notablist(){
                this.$emit('notablist')
            },
            getClass(item){
                this.$emit('notabId',item)
                this.setClsId(item.id)
                this.setList(item.topTList)
            },
            ...mapMutations({
                setList:'SET_LIST',
                setClsId:'SET_CLSID'
            })
        },
        computed:{
            ...mapGetters([
                'clsId'
            ])
        },
        watch:{
            clsId(newId){
                this.ClsId = newId
            }
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .showtab
        position: fixed;
        background-color: #fff;
        top: 1.877rem;
        z-index: 6;
        padding-left: .341rem;
        padding-right: .298rem;
        overflow: hidden;
        .tab-list
            position: relative;
            width: 100%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            .a
                position: relative;
                display: block;
                padding-top: .256rem;
                padding-bottom: .256rem;
                margin-left: 0.597rem;
                margin-right: 0.597rem;
                background-color: #fff;
                p
                        width: 1.365rem;
                        font-size: .597rem;
                        line-height: 1.28rem;
                        text-align: center;
            .dsj
                margin: 0 .298rem;
                p
                    width:1.962rem
            .active p
                    color: #fb7299;
                    border-bottom: .085rem solid #fb7299;
        .tab-btn
            padding:11px 0;
            img
                display:block;
                margin:0 auto

</style>