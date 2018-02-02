<template>
  <div>
    <ul>
      <li v-for='(item, index) in goods.goodsData' :key='item.id'>
        <div>
          <img :src="item.image">
        </div>
        <div>
          <h3>{{item.title}}</h3>
          <p>￥{{item.price}}</p>
          <div>
            <span @click='reduceGoods(index)'>-</span>
            <input readonly v-model='item.num'>
            <span @click='addGoods(index)'>+</span>
          </div>
        </div>
      </li>
    </ul>
    <div>
      Total: ￥{{goods.totalPrice}}
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations} from 'vuex'
  export default {
    name: 'Market',
    computed: {
      ...mapState(['goods']),
      ...mapGetters(['totalPrice', 'totalNum'])
    },
    methods: {
      ...mapMutations(['reduceGoods', 'addGoods'])
    }
  }
</script>