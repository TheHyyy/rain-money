<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>
