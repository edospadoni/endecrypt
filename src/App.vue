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
    font-size: 55px;
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
    width: 20%;
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
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 15px;
  }

  .router-back {
    font-size: 20px;
    margin-top: 20px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-weight: normal;
      font-size: 35px;
    }
    a {
      font-size: 25px;
    }
    input {
      width: 75%;
    }
    button {
      width: 30%;
    }
  }

</style>
