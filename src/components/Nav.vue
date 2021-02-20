<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />记账</router-link
    >
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />标签</router-link
    >
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />统计</router-link
    >
  </nav>
</template>

<script>
// import x from '@/assets/icons/label.svg'
// console.log(x)
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
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1296db;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: #1246db;
    font-size: 14px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  }
}
</style>
