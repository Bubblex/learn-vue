<template>
  <div>
    <mt-button @click='handleClick' type="default">打开action</mt-button>
    <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // action sheet 选项内容
      actions: [{
        name: '拍照',
        method: this.getCamera
      }, {
        name: '从相册中选择',
        method: this.getLibrary
      }],
      sheetVisible: false
    }
  },
  methods: {
    handleClick () {
      this.sheetVisible = !this.sheetVisible
    },
    getCamera () {
      console.log('拍照')
    },
    getLibrary () {
      console.log('从相册中选择')
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
