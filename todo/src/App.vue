<template>
  <div id="app" class="hello">
    <p>my todo list</p>
    <div>
      <input v-model="todos" type="text" id="input" placeholder="Enter todo..." />
      <button v-if="todos" type="submit">Add</button>
    </div>

    <ul>
      <li>{{todos}}</li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { CBox, CButton } from '@chakra-ui/vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      todos: ''
    }
  }
}
</script>
