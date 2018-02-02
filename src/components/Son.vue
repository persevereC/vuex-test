<template>
  <div class='son'>
    <div>son slot</div>
    <slot :resp='arr'></slot>
    <ul>
      <li v-for='(index, item) in l' :key='index' @click='c(item)'>{{item}}</li>
    </ul>
    <slot>
      我们是唱歌的孩子
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Son',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr: ['we', 'are', 'young']
    }
  },
  props: [
    'l'
  ],
  methods: {
    c(item){
      console.log(item);
      this.$emit('transfer', item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
