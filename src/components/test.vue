<template>
  <div class="test">
    <p>test</p>
    <mt-range v-model="rangeValue"></mt-range>
    <mt-cell-swipe
      title="text"
      :right="[
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ]">
    </mt-cell-swipe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      rangeValue: 10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  color: #42b983;
}
</style>
