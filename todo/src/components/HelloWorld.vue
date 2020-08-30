<template>
  <div class="hello">
    <!-- <p>my todo list</p>
    <div>
      <input v-model="todos" type="text" id="input" placeholder="Enter todo..." />
      <button v-if="todos" type="submit">Add</button>
    </div>

    <ul>
      <li>{todos}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
