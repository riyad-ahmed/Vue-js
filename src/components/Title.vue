<template>
<div style="display: contents">
  <h1>Email : {{email}}</h1>
  <h1>{{Num==554}}</h1>
  <p>Addition {{59+20}}</p>

  <p style="color:gray">API CALL</p>

  <div v-for="item in lists" :key="item.id" style="border:2px solid red">
    <h1>{{item.title}}</h1>
    <p>{{item.completed}}</p>
  </div>
  <p>API closed</p>
  <h1>sumData : {{list()}}</h1>
  <h1>sumData : {{list().email}}</h1>
  <button v-on:click="message('hello')">click me</button>
  <button v-on:dblclick="msgtow('hello')">double click me</button>
</div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      email: 'riyadahmed5764@gmail.com',
      Num: '555',
      age: '25',
      lists: [],
    }
  },
  methods: {
    list() {
      return {
        name: 'Riyad Ahmed',
        email: this.email,
      }
    },
    message(name) {
      console.log(name)
    },
    msgtow() {
      alert('double clicked')
    },

    // call api form free api 
    async getdata() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
      const data = await res.json()
      console.log(data)
      this.lists = data;
    }
  },
  mounted() {
    this.getdata()
  }

}
</script>

<style scoped>
p {
  color: blue;
  font-size: 30px;
  font-weight: bold;
}
</style>
