<template>
    <div>
        <div class="hotel-item" v-for="item in hotelList" :key="item.id">
            <router-link to="">
                <div class="hotel-item-top">
                    <div class="hotel-item-top-left">
                        <img :src="item.cover" alt="">
                    </div>
                    <div class="hotel-item-top-right">
                        <p class="hotel-item-top-p1">{{item.name}}</p>
                        <p class="hotel-item-top-p2">{{item.price}}万/套</p>
                    </div>
                </div>
                <div class="hotel-tabs">
                    <span class="hotel-tabs-class"  v-for="(list,index) in item.lables">{{list}}</span>
                </div>
            </router-link>
        </div>
        <!--<div>-->
            <!--<ul>-->
                <!--<li v-for="item in hotelItems">-->
                    <!--<span>{{item.name}}</span>-->
                    <!--<span>{{item.price}}</span>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        name:'hotelList',
        props:['hotelList'],
        data(){
            return{
                hotelItems:this.hotelList // prop 作为初始值传入后，子组件想把它当作局部数据来用
            }
        },
    }
</script>
<style>
.hotel-item{
    margin-top: 0.5rem;
    width: 100%;
}
    .hotel-item-top{
        display: flex;
        flex-flow: row nowrap;
    }
    .hotel-item-top-left{
        width: 5.5rem;
        height: 3.5rem;
    }
.hotel-item-top-left img{
    width: 100%;
    height: 100%;
}
    .hotel-item-top-right{
        width:9.2rem ;
        display: flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .hotel-item-top-p1{
        font-size: 0.63rem;
        color: #333;
        padding-left: 0.7rem;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        line-height: 1.1rem;
    }
    .hotel-item-top-p2{
        font-size: 0.57rem;
        color: #62B4F9;
        padding-left: 0.7rem;
    }
    .hotel-tabs-class{
        text-align: center;
        color:#fff;
        margin-bottom:0.2rem;
        border-radius:0.4rem;
        margin-right:0.4rem;
        font-size:0.5rem;
        padding-bottom:0.1rem;
        padding-top:0.1rem;
        padding-left:0.4rem;
        padding-right:0.4rem;
        width:auto;
        border-bottom:0;
    }
    .hotel-item .hotel-tabs-class:nth-child(n+1){
        background-color: #006d77;
    }
    .hotel-item .hotel-tabs-class:nth-child(n+2){
        background-color: #0056fd;
    }
    .hotel-item .hotel-tabs-class:nth-child(n+3){
        background-color: #0098ce;
    }
    .hotel-item .hotel-tabs-class:nth-child(n+4){
        background-color: cyan;
    }
</style>
