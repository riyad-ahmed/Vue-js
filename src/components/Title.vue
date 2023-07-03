<template>
<div style="display: contents">
  <h1>Email : {{email}}</h1>
  <h1>{{Num==554}}</h1>
  <p>Addition {{59+20}}</p>
  <h1>sumData : {{getdata()}}</h1>
    <h1>sumData : {{getdata().email}}</h1>
</div>
</template>

<script>
export default {
    name: 'Title',
    data() {
      return {
        email: 'riyadahmed5764@gmail.com',
        Num: '555'
      }
    },
    methods: {
      getdata() {
        return {
          name: 'Riyad Ahmed',
          email: this.email,
        }
      }
    }  
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
