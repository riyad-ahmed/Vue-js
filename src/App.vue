<template>
<div class="body">
  <Header />
  <button @click="count++">
    {{ count }}
  </button>
  <Title />

  <Forms />

</div>
</template>

<script>
import {
  ref
} from 'vue'
import Title from './components/Title.vue'
import Header from './components/Header.vue'
import Forms from './components/Forms.vue'
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
    Header,
    Forms,
  }

}
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
