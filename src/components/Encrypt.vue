<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="secret" placeholder="Insert your Secret"></input>
    <input v-model="passphrase" placeholder="Insert your Passphrase"></input>
    <button v-on:click="encrypt()">Encrypt</button>
    <textarea class="hash-read" v-model="hash" placeholder="" readonly></textarea>
    <router-link class="router-back" :to="{ path: '/decrypt/' + escape(hash)}">Decrypt</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Encrypt your Secret',
        secret: '',
        passphrase: '',
        hash: ''
      }
    },
    methods: {
      encrypt: function () {
        var AES = require("crypto-js/aes");
        var hash = AES.encrypt(this.secret, this.passphrase);
        this.hash = hash.toString();
      },
      escape: function (val) {
        return encodeURIComponent(val)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
