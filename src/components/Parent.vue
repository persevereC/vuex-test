<template>
  <div class='parent'>
    <son :l = 'list' @transfer='receive'>
      <template slot-scope='data'>
        <div>
          <span v-for='item in data.resp' :key='item'>{{item}} </span>
        </div>
      </template>
    </son>
    <table>
      <son :l = 'list' @transfer='receive'>
        <template slot-scope='data'>
          <div>
            <span v-for='item in data.resp' :key='item'>{{item}} </span>
          </div>
        </template>
      </son>
    </table>
    <son :l='list'>
      <div slot-scope='data'>{{data.resp}}</div>
    </son>
    <div>{{mg}}</div>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'parent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [1,2,3,4,5,6],
      mg: ''
    }
  },
  mounted(){
    console.log('parent');
    this.$bus.$on('msg', val => {
      console.log(val);
      this.mg = val
    })
  },
  components: {
    Son
  },
  methods: {
    receive(resp){
      console.log(`我是${resp}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
