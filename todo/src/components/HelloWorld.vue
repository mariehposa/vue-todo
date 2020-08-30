<template>
  <div class="hello">
    <p>my todo list</p>
    <div>
      <input type="text" id="input" placeholder="Enter todo..." />
      <button>Add</button>
    </div>

    <ul>
      <li>{}</li>
    </ul>
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
