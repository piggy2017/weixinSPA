<template>
    <div class="getmethods">
        <p>在methods里面调用函数</p>
        <p>{{count}}</p>
        <div>
            <button @click="add()">+add</button>
            <button @click="getAdd(50)">methods 调用</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                count:1
            }
        },
        methods:{
            add(num){
                this.count+=num;
            },
            getAdd(myNum){
                this.$options.methods.add.bind(this)(myNum);
            }
        }
    }
</script>
<style>

</style>
