<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.filedName }}</span>
      <input
        type="text"
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch, Prop } from 'vue-property-decorator'

@Component
export default class FormItem extends Vue {
  @Prop({ default: '' }) value!: string
  @Prop({ required: true }) filedName!: string
  @Prop() placeholder?: string
  onValueChanged(value: string) {
    this.$emit('update:value', value)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
