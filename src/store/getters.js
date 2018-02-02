export default {
  count: state => state.count,
  c: state => state.c,
  totalNum: state => {
    let aTotalNum = 0;
    state.goods.goodsData.forEach((item, index) => {
      aTotalNum += item.num;
    });
    return aTotalNum;
  },
  totalPrice: state => {
    let aTotalPrice = 0;
    state.goods.goodsData.forEach((item, index) => {
      aTotalPrice += item.num * item.price;
    });
    return aTotalPrice.toFixed(2);
  }
}