<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/reset.scss';
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
  color: #1296db;
  background-color: white;
}
#app {
  max-width: 480px;
  margin: 0 auto;
  box-shadow: 0 3px 1px #777;
  min-height: 100vh;
}
</style>
