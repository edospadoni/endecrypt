<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    font-weight: normal;
    font-size: 75px;
  }

  input {
    display: block;
    text-align: center;
    margin: 0 auto;
    height: 30px;
    margin-bottom: 15px;
    width: 30%;
    font-size: 15px;
    border: none;
    border-bottom: 1px solid #dfdfdf;
  }

  button {
    background: #42b983;
    border: 1px solid #d8d8d8;
    height: 30px;
    margin-bottom: 15px;
    width: 8%;
    font-size: 15px;
    color: white;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-size: 50px;
    margin: 25px;
    color: #42b983;
  }

  .hash-write {
    width: 50%;
  }

  .hash-read {
    border: none;
    width: 75%;
    font-size: 25px;
  }

  .router-back {
    font-size: 20px;
    margin-top: 20px;
  }

</style>
