<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="hash" placeholder="Insert your Hash"></input>
    <input v-model="passphrase" placeholder="Insert your Passphrase"></input>
    <button v-on:click="decrypt()">Decrypt</button>
    <input class="hash" v-model="secret" placeholder="" readonly></input>
    <router-link class="router-back" to="/encrypt">Encrypt</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Decrypt',
    data() {
      return {
        msg: 'Decrypt your Secret',
        secret: '',
        passphrase: '',
        hash: this.$route.params.hash || ''
      }
    },
    methods: {
      decrypt: function () {
        var CryptoJS = require("crypto-js");
        var bytes = CryptoJS.AES.decrypt(this.hash, this.passphrase);
        this.secret = bytes.toString(CryptoJS.enc.Utf8);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
