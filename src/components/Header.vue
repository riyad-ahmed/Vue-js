<template>
<div class="upContent">
<h1>{{name}}</h1>
</div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      name: 'Riyad Ahmed',
    }

  }
}
</script>

<style scoped>
h1 {
  color: red;
}
.upContent {
  height: 100px;
  width: 100%;
}
</style>
