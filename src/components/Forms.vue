<template>
<div style="display: contents">
  <input type="text" placeholder="Enter Email" v-model="email">
  <br>
  <br>
  <input type="password" placeholder="Enter Password" v-model="password">
  <br>
  <br>
  <div>
    <button v-on:click="getdata()">Submit</button>
  </div>
  <div>
    <h2>Technology</h2>
    <label for="java">Java</label>
    <input type="checkbox" value="java" v-model="technology" id="java">
    <label for="php">PHP</label>
    <input type="checkbox" value="php" v-model="technology" id="php">
    <label for="node">node</label>
    <input type="checkbox" value="node" v-model="technology" id="node">
    <h1>Technology : {{technology}}</h1>
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
      technology: [],
    }
  },
  methods: {
    getdata() {
      console.log(this.email, this.password)
    }
  },
  watch: {
    technology() {
      console.log(this.technology)
    }
  }
}
</script>

<style scoped>
p {
  color: blue;
}
</style>
