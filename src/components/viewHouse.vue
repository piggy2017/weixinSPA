<template>
    <div class="viewHouse">
        <pro-list :projectList="houseList"></pro-list>
    </div>
</template>
<script>
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    import proList from '@/components/proList/proList'
    export default {
        components:{
            proList:proList
        },
        data(){
            return{
                houseList:[]
            }
        },
        methods:{
            init(){
                axios.get(data.baseUrl+"get_coin").then(res=>{
                    console.log(res);
                    this.houseList=res.data.api_data;
                })
            }
        },
        created(){
            this.init()
        }
    }
</script>
<style>

</style>
