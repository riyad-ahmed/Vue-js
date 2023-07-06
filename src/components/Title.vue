<template>
<div style="display: contents">
  <h1>Email : {{email}}</h1>
  <h1>{{Num==554}}</h1>
  <p>Addition {{59+20}}</p>

  <p style="color:gray">API CALL</p>

  <div v-for="item in lists" :key="item.id" style="border:2px solid red">
    <h1 id="inar-data">{{item.title}}</h1>
    <p id="inar-data">{{item.completed}}</p>
  </div>
  <p style="color:gray">API closed</p>
  <h1>sumData : {{list()}}</h1>
  <h1>sumData : {{list().email}}</h1>
  <button v-on:click="message('hello')">click me</button>
  <button v-on:dblclick="msgtow('hello')">double click me</button>
  <div>
    <input id="input" type="text" v-model="count">
    <p>{{count}}</p>
  </div>
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
      count: 0,
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
#input{
  margin-top: 2rem;
  width: 200px;
  height: 25px;
}
#inar-data{
  font-size: 15px;
  color: black;
  font-weight: bold;

}
</style>
