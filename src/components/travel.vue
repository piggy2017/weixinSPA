<template>
    <div class="travel">
        <pro-list :projectList="projectList"></pro-list>
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
                projectList:[]
            }
        },
        methods:{
            init(){
                axios.get(data.baseUrl+"activity/more").then(res=>{
                    console.log(res);
                    this.projectList=res.data.api_data
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
