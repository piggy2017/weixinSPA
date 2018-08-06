<template>
    <div class="parent">
        <div class="items">
            <div class="item" :class="[todo===1? 'active':'']" @click="choose(1)">item1</div>
            <div class="item" :class="[todo===2? 'active':'']" @click="choose(2)">item2</div>
            <div class="item" :class="[todo===3? 'active':'']" @click="choose(3)">item3</div>
        </div>
        <div style="margin-top: 2rem">
            <div>
                <button class="btn" @click="add()" :disabled="addDisabled">click+</button>
                <button class="btn" @click="redu()" :disabled="reduceDisabled">click-</button>
            </div>
            <params-test :params="itemId"></params-test>
        </div>

    </div>
</template>
<script>
    import paramsTest from '@/components/paramsTest'
    export default {
        components:{
            paramsTest
        },
        data(){
           return{
               todo:1,
               itemId:1,
               max:15,
               //start:1,
               addDisabled:false,
               reduceDisabled:true
           }
        },
        methods:{
            choose(type){
                this.todo=type;
            },
            add(){
                if(this.itemId<this.max){
                    this.itemId+=1;
                    this.reduceDisabled=false;
                }else{
                    this.addDisabled=true;
                }
            },
            redu(){
                if(this.itemId<2){
                    this.reduceDisabled=true
                }else{
                    this.itemId-=1;
                }
            }
        },
        watch:{
            itemId(oldValue,newValue){
                if(oldValue===1){
                    console.log(123);
                    this.reduceDisabled=true
                }else if(oldValue===this.max){
                    console.log(321);
                    this.addDisabled=true
                }else{
                    this.reduceDisabled=false;
                    this.addDisabled=false
                }
            }
        }
    }
</script>
<style>
.items{
    width: 100%;
    height: 2rem;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
    .item{
        flex:1 1 auto;
        text-align: center;
    }
    .active{
        color: red;
    }
    .btn{
        width: 3rem;
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
        border: 1px solid #efefef;
        border-radius: 3px;
    }
</style>
