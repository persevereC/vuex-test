<template>
  <div class="hello">
    <div>other component</div>
    <input type='text' v-model='cc'>
    {{cc}}
    <button @click='onBus'>bus</button>
    <h2>count is{{$store.state.count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cc: ''
    }
  },
  created(){
    console.log('other')
  },
  destroyed(){
    console.log('other destroyed')
  },
  methods: {
    onBus(){
      this.$bus.$emit('msg', 'this is a bus from Other Component');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
