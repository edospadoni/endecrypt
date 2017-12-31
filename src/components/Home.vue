<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/encrypt">Encrypt</router-link>
    <router-link to="/decrypt">Decrypt</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to EnDeCrypt App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
