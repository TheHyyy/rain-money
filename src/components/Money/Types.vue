<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Types extends Vue {
  type = '-' // 减号'-'表示支出，  加号'+'表示收入

  // 更改支出或收入状态
  selectType(type: string) {
    // 传过来的type 只能是  '-' 或 '+'
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown')
    }
    this.type = type
    console.log(this.type)
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #eee;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #ddd;
    }
  }
}
</style>
