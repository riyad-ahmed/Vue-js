<template>
<div style="display: contents">
  <input type="text" placeholder="Enter Email" v-model="email">
  <br>
  <br>
  <input type="password" placeholder="Enter Password" v-model="password">
  <br>
  <br>
  <div>
    <button v-on:click="getConsole()">Submit</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    getConsole() {
      console.log(this.email, this.password)
    }
  }
}
</script>

<style scoped>
p {
  color: blue;
}
</style>
