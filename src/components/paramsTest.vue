<template>
    <div class="paramsTest">
        <p style="color: red;">{{msg}}</p>
        <p style="color: red;">传递的参数是:{{params}},获取的ID：{{id}}</p>
        <p style="color: red;">计算过后的数据:{{myCount}}</p>
        <div @click="change()">click</div>
        <h2>click:{{nowCount}}</h2>
        <h3 style="color: green">
            <span>{{getData().a}}</span>
            <span>{{getData().b}}</span>
        </h3>
    </div>
</template>
<script>
    export default {
        props:['params'],
        data(){
            return{
                msg:"Hello World !",
                id:this.params,
                nowCount:''
            }
        },
        computed:{
            myCount:function(){
                return this.params*100
            }
        },
        methods:{
            change(){
                this.nowCount=this.params*3
            },
            init(){
                console.log("hahahhaah"+this.params)
            },
            getData(){
                let content={};
                content.a=this.params*20;
                content.b=this.params*40;
                return content
            }
        },
        watch:{
            params(oldValue,newValue){
                //console.log(oldValue);
                //console.log(newValue)
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
<style>

</style>
