<template>
    <div class="viewHouse">
        <pro-list :projectList="houseList"></pro-list>
    </div>
</template>
<script>
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    import {getPromise} from '@/assets/js/promise.js'
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
        created(){
            let _self=this;
            getPromise(data.baseUrl+'projects').then(res=>{
                console.log(res);
                _self.houseList=res.data.api_data
            },error=>{
                console.log(error)
            })
        }
    }
</script>
<style>

</style>
