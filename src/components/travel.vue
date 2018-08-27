<template>
    <div class="travel">
        <pro-list :projectList="projectList"></pro-list>
    </div>
</template>
<script>
    import axios from 'axios'
    import data from '@/assets/js/util.js'
    import proList from '@/components/proList/proList'
    //import promiseAxios from '@/assets/js/promise.js'
    import {getPromise} from '@/assets/js/promise.js'
    export default {
        components:{
            proList:proList
        },
        data(){
            return{
                projectList:[]
            }
        },
        created(){
            let _self=this;
            getPromise(data.baseUrl+"activity/more").then(json=>{
                console.log(json);
                _self.projectList=json.data.api_data
            },error=>{
                console.log(error)
            })
        }
    }
</script>
<style>

</style>
