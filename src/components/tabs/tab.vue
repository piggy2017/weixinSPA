<template>
    <div class="tab">
        <router-link ref="link1" to="/firstPage" tag="div" class="tab-item tab-item-1">
            <img class="active-image" src="../../assets/zhuye-2.jpg" alt="">
            <img class="no-choose" src="../../assets/zhuye.jpg" alt="">
            <span>首页</span>
        </router-link>
        <router-link to="/dongTai" tag="div" class="tab-item tab-item-2">
            <img  class="no-choose" src="../../assets/dongtai.jpg" alt="">
            <img  class="active-image" src="../../assets/dongtai-2.jpg" alt="">
            <span>动态</span>
        </router-link>
        <router-link to="/center" tag="div" class="tab-item tab-item-3">
            <img  class="no-choose" src="../../assets/wode.jpg" alt="">
            <img class="active-image" src="../../assets/wode-2.jpg" alt="">
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
    export default {
        name:'tab',
        methods:{
            init(){
                let hasClass=this.$refs.link1.className
                console.log(hasClass)
            }
        },
        created(){
            //this.init();
        },
        computed:{

        }
    }
</script>
<style>
    .tab{
        height: 2.4rem;
        width: 100%;
        background-color: #f2f2f2;
        border-top: #000;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-flow:row nowrap;
        z-index: 99;
    }
    .tab-item{
        flex: 1;
        text-align: center;
        font-size: 0.71rem;
        display: flex;
        flex-flow:column nowrap;
        align-items: center;
        justify-content:center;
    }
    .tab .tab-item-1 .no-choose{
        display: block;
    }
    .tab .tab-item-1 .active-image{
        display: none;
    }
    .tab .tab-item-2 .no-choose{
        display: block;
    }
    .tab .tab-item-2 .active-image{
        display: none;
    }
    .tab .tab-item-3 .no-choose{
        display: block;
    }
    .tab .tab-item-3 .active-image{
        display: none;
    }
    .tab .tab-item-1.router-link-active .active-image{
        display: block;
    }
    .tab .tab-item-1.router-link-active .no-choose{
        display: none;
    }
    .tab .tab-item-2.router-link-active .active-image{
        display: block;
    }
    .tab .tab-item-2.router-link-active .no-choose{
        display: none;
    }
    .tab .tab-item-3.router-link-active .active-image{
        display: block;
    }
    .tab .tab-item-3.router-link-active .no-choose{
        display: none;
    }






    .tab-item span{
        margin-top: 0.1rem;
    }
    .tab-item img{
        width: 0.9rem;
        height: 0.8rem;
    }
    .router-link-active{
        color: #00459c;
    }
</style>
