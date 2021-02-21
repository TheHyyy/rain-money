<template>
  <Layout class-prefix="layout">
    <div class="la">
      <div class="la2">
        <Tags />
        <Notes />
        <Types xxx="hi" />
        <NumberPad />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'

export default {
  name: 'Money',
  components: { Tags, Notes, Types, NumberPad },
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
