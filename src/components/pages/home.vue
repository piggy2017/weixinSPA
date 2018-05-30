<template>
    <div class="home">
        <router-view></router-view>
        <tab></tab>
    </div>
</template>
<script>
    import tab from '@/components/tabs/tab'
    export default {
        components:{
            tab:tab
        }
    }
</script>
<style>

</style>
