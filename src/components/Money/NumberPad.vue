<template>
  <div class="numberPad">
    <div class="output">{{ output || 0 }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent" class="dian">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NumberPad extends Vue {
  output = '0'
  // 输入事件
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement
    const input = button.textContent as string
    // 控制长度不能超过16
    if (this.output.length === 16) {
      return
    }
    // 为0情况下的if
    if (this.output === '0') {
      // 是0的时候不能再加入0
      if (input === '0') {
        return
      }
      // 是0的情况下且为123456789，直接让输入的1或者2或者x替换掉这个0
      if ('123456789'.indexOf(input) >= 0) {
        this.output = input
      } else {
        this.output += input
      }
      return
    }
    // 控制有'.'的时候不能再加入'.'
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return
    }
    if (!this.output) {
      if (input === '.') {
        this.output = '0'
      }
    }
    this.output += input
  }
  // 删除事件
  remove() {
    this.output = this.output.slice(0, -1)
  }
  // 清空
  clear() {
    this.output = '0'
  }
  // 提交 ok事件
  ok() {
    this.$emit('update:value', this.output)
    this.$emit('submit', this.output)
    this.output = '0'
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    min-height: 72px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      color: #1296db;
      background: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bg: #fff;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 2%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4 * 1%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4 * 1.5%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 2%);
      }
      &:nth-child(14) {
        background: darken($bg, 4 * 2.5%);
      }
      &:nth-child(12) {
        background: darken($bg, 4 * 3%);
      }
      &.dian {
        font-size: 30px;
      }
    }
  }
}
</style>
