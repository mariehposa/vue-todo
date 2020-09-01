<template>
  <div id="app" class="hello">
    <p>my todo list</p>
    <div>
      <input v-model="todos" type="text" id="input" placeholder="Enter todo..." />
      <button v-if="todos" type="submit">Add</button>
        <!-- <c-box>
          <c-button>
            Chakra Consumed! ⚡️
          </c-button>
        </c-box> -->
    </div>

    <ul>
      <li>{{todos}}</li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { CBox, CButton } from '@chakra-ui/vue'

export default {
  name: 'App',
  // components: {
  //   CBox,
  //   CButton
  // },
  data() {
    return {
      todos: ''
    }
  }
}
</script>
