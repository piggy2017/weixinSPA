<template>
    <div class="getmethods">
        <p>在methods里面调用函数</p>
        <p>{{count}}</p>
        <div>
            <button @click="add(20)">+add</button>
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
                console.log(this.$options.methods);
                this.$options.methods.add.call(this,myNum);
                //this.$options.methods.add.bind(this)(myNum);  都可以实现函数的调用
            }
        }
    }
</script>
<style>

</style>
