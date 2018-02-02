<template>
  <div>
    <button @click='add'>0</button>
    <button @click='minus'>0</button>
    <h2>count is{{count}}</h2>
    <h2>count is{{c}}</h2>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    computed: mapGetters(['count', 'c']),
    methods: mapActions(['add','minus'])
  }
</script>>