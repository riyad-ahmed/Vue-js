<template>
<HelloWorld msg="Welcome to my Vue.js App , {{ message }}" />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ref,
  }
}
</script>
