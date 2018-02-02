<template>
  <div class='time-picker'>
    <div>
      <ul class='y'>
        <li v-for='(item, index) in yitems' :key='index'>{{item}}</li>
      </ul>
      <ul class='m'>
        <li v-for='(item, index) in mitems' :key='index'>{{item}}</li>
      </ul>
      <ul class='d'>
        <li v-for='(item, index) in ditems' :key='index'>{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timePicker',
  created(){
    var year = new Date().getYear() + 1900;
    console.log(year);
    for(var i = 2000; i<=year; i++){
      this.yitems.push(i);
    }
  },
  data(){
    return{
      yitems: [],
      mitems: [1,2,3,4,5,6,7,8,9,10,11,12],
      ditems: []
    }
  }
}
</script>

<style scoped>
  body{
    margin: 0!important;
  }
  ul{
    list-style: none;display: inline-block;margin: 0;padding: 0;font-size: 0;height: 6rem;overflow: scroll;
  }
  li{
    font-size: 1.8rem;
  }
  .y{
    width: 40%;background: #aaa;float: left;
  }
  .m{
    width: 20%;background: rgb(133, 66, 66);
  }
  .d{
    width: 40%;background: #111;float: right;
  }
</style>
