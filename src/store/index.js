import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  count: 0,
  c: 0,
  goods: {
    totalPrice: 0,
    totalNum:0,
    goodsData: [
      {
          id: '1',
          title: 'Apple',
          price: 8.00,
          image: 'https://www.shangdian.com/static/pingguo.jpg',
          num: 0
      },
      {
          id: '2',
          title: 'Banana',
          price: 5.00,
          image: 'https://www.shangdian.com/static/xiangjiao.jpg',
          num: 0
      }
    ]
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store