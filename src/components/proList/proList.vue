<template>
    <div class="proList">
        <div class="pro-item" v-for="item in projectList" :key="item.id">
            <router-link :to="'/projectDetail/'+item.id" tag="div">
                <img :src="item.cover" alt="">
                <p class="pro-item-name">{{item.name}}</p>
                <p class="pro-item-area">{{item.areaName}}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'proList',
        props:['projectList']
    }
</script>
<style>
.proList{
    height: 100%;
    width: 100%;
}
    .pro-item{
        width: 95%;
        margin: 0 auto;
    }
    .pro-item img{
        width: 100%;
        height: 7.5rem;
    }
    .pro-item-name{
        margin-top: 0.2rem;
        padding-left: 0.5rem;
        font-size: 0.72rem;
        color: #333;
    }
    .pro-item-area{
        margin-top: 0.3rem;
        padding-left: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.6rem;
        color: #333;
    }
</style>
