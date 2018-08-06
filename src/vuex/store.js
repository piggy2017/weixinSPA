import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import data from '@/assets/js/util.js'
Vue.use(Vuex);


const state={
    hasLogin:0,
    hasCode:1,
    hasList:{}
}
const mutations={
    getData(state){
        axios.get(data.baseUrl+'hresources').then(res=>{
            state.hasList=res.data.api_data;
        })
    }
}
const actions={
    getAction(context){
        context.commit('getData');
    }
}

export default new Vuex.Store({
    state,mutations,actions
})
