<template>
    <div class="tab">
        <div class="tab-left">
            <div class="left-scroll">
                <router-link class="a"
                :class="{active: item.id == clsId}" 
                :to="{ path:item.url }" 
                :key="item.id" 
                v-for="(item,index) in list"
                ><p @click="getClass(item)">{{item.title}}</p></router-link>
            </div>
        </div>
        <div class="tab-right" @click="showtab">
            <img src="./xjt.png" alt="">
        </div>
    </div>
</template>
<script>
    import {TopList} from 'common/js/config'
    import {mapMutations,mapGetters} from 'vuex'
    export default{
        props:{
            id:{
                type:Number,
                id:0
            }
        },
        data(){
            return {
                list:TopList,
            }
        },
        methods:{
            showtab(){
                this.$emit('showtablist')
            },
            getClass(item){
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
            id(newId){
                this.ClsId = newId
            }
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .tab
        position: fixed;
        background-color: #fff;
        width: 100%;
        height: 1.877rem;
        top: 1.856rem;
        z-index: 5;
        overflow: hidden;
        .tab-left
            position: relative;
            width: 90%;
            padding-top: .256rem;
            overflow: hidden;
            .left-scroll
                position: relative;
                padding-left: 1.024rem;
                overflow-x: hidden;
                overflow-y: hidden;
                height: 1.877rem;
                white-space: nowrap;
                padding-bottom: .213rem;
                .a
                    display: inline-block;
                    -webkit-transform: translateZ(0);
                    -webkit-perspective: 1000;
                    background-color: #fff;
                    margin-right: 1.293rem;
                    p
                        width: 1.365rem;
                        font-size: .597rem;
                        line-height: 1.28rem;
                        text-align: center;
                .active p
                    color: #fb7299;
                    border-bottom: .085rem solid #fb7299;
        .tab-right
            position: absolute;
            top: 0;
            width: 1.386rem;
            height: 1.877rem;
            right: .256rem;
            img
                display:block
                margin:16px auto
</style>