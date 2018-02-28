<template>
  <div>
    <mt-cell-swipe
      title='title'
      value='value'
      label='label'
      :right="[
        {
          content: 'Change',
          style: { background: 'rgb(49,170,247)', color: '#fff' },
          handler: () => handleChange()
        },
        {
          content: 'Delete',
          style: { background: 'rgb(255,59,48)', color: '#fff' },
          handler: () => handleDelete()
        }
      ]"
    >
    </mt-cell-swipe>
  </div>
</template>

<script>
import { MessageBox, Indicator } from 'mint-ui'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      rangeValue: 10
    }
  },
  methods: {
    handleChange () {
      Indicator.open({
        spinnerType: 'fading-circle'
      })

      setTimeout(function close () {
        Indicator.close()
      }, 500)
    },

    handleDelete () {
      MessageBox.confirm('确认删除吗?', '').then(action => {
        console.log('确认删除')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.item {
  width: 100%
}

</style>
