import store from './index'

export default {
  add: state => {
    state.count++;
    state.c = state.count + 3;
  },
  minus: state => {
    state.count--;
    state.c = state.count - 3;
  },
  result: (state, msg) => {
    console.log(msg);
    state.goods.totalPrice = store.getters.totalPrice;
    state.goods.totalNum = store.getters.totalNum;
  },
  reduceGoods: (state, index) => {
    state.goods.goodsData[index].num -= 1;
    let msg = '执行了一次';
    store.commit('result', msg);
  },
  addGoods: (state, index) => {
    state.goods.goodsData[index].num += 1;
    let msg = '执行了一次';
    store.commit('result', msg);
  }
}