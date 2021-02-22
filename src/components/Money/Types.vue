<template>
  <div>
    <ul class="types">
      <li :class="value === '-' && 'selected'" @click="selectType('-')">
        支出
      </li>
      <li :class="value === '+' && 'selected'" @click="selectType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string

  // 更改支出或收入状态
  selectType(type: string) {
    // 传过来的type 只能是  '-' 或 '+'
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown')
    }
    this.$emit('update:value', type)
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
