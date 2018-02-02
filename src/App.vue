<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/>
    <Parent/> -->
    <select v-model='selected'>
      <option v-for='(item, index) in s' :key='index'>{{item}}</option>
    </select>
    <!-- <keep-alive> -->
    <component :is='currentView'></component>
    <!-- </keep-alive> -->

    <!-- <time-picker/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Parent from './components/Parent'
import Other from './components/Other'
import TimePicker from './components/TimePicker'
import Counter from './components/Counter'
import Market from './components/Market'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Parent,
    Other,
    TimePicker,
    Counter,
    Market
  },
  created(){
    console.log(124)
  },
  data(){
    return {
      currentView: 'HelloWorld',
      s: ['HelloWorld', 'Parent', 'Other', 'Counter', 'Market'],
      selected: 'HelloWorld'
    }
  },
  updated(){
    this.currentView = this.selected;
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
