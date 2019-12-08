import Vuex from 'vuex'
import vue from 'vue'
import cvDataModule from './modules/cvDataModule'

// load vuex
vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules: {
        cvDataModule
    }
})