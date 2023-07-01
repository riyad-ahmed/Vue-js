
<template>
<div>
  <button @click="count++">
    {{ count }}
  </button>
  <Title />
</div>
</template>

<script>

import {
  ref
} from 'vue'
import Title from './components/Title.vue'
const count = ref(0)

export default {
  name: 'App',
  setup() {
    return {
      count
    }
  },
  components: {
    Title,
  }

}
</script>
