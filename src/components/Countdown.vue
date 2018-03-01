<template>
  <div>
    <mt-button @click='handleClick' type="primary" v-if="!isGettingCode">获取验证码</mt-button>
    <mt-button type="default" v-if='isGettingCode'>{{second}}s</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isGettingCode: false,
      second: 10,
      timer: null
    }
  },
  methods: {
    handleClick () {
      this.isGettingCode = !this.isGettingCode

      this.timer = setInterval(() => {
        this.second = this.second - 1

        if (this.second < 1) {
          this.isGettingCode = !this.isGettingCode
          this.second = 10
          clearInterval(this.timer)
        }
      }, 1000)
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
