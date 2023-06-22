
<template>
  <button @click="count++">
    {{ count }}
  </button>
</template>

<script>

import {
  ref
} from 'vue'
const count = ref(0)

export default {
  name: 'App',
  setup() {
    return {
      count
    }
  },
  // components: {
  //   HelloWorld,
  // }

}
</script>
