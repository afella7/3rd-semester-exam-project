<template>
  <div>
    <center>
    <h1>Count:{{ counter }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    </center>
  </div>
</template>

<script>
export default {
  name: 'CounterApp',

  computed: {
    counter(){
      return this.$store.getters.counter
    }
  },
  methods: {
    increment(){
      this.$store.dispatch('increment')
    },
    reset(){
      this.$store.dispatch('reset')
    },
    decrement(){
      this.$store.dispatch('decrement')
    }

  }
 
}
</script>


<style scoped>

</style>
