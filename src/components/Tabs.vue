<template>
  <div>
    <ul class="tabs" :class="{ [classPrefix + '-tabs']: classPrefix }">
      <li
        v-for="item in dataSource"
        :key="item.value"
        :class="{
          selected: item.value === value,
          [classPrefix + '-tabs-item']: classPrefix,
        }"
        @click="select(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

type DataSourceItem = { text: string; value: string }
@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem[]
  @Prop(String) readonly value!: string
  @Prop(String) classPrefix?: string

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value)
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  text-align: center;
  font-size: 22px;
  background: #c4c4c4;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1296db;
    color: white;
    position: relative;
    &.selected {
      font-size: 24px;
    }
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 3%;
      left: 15%;
      width: 70%;
      height: 4px;
      background: #f0f4f7;
    }
    &.selected {
      // background: red;
      // color: white;
    }
  }
}
</style>
