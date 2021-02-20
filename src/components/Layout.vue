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
  border: 1px solid skyblue;
  display: flex;
  flex-direction: column;
}
.content {
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>
