<template>
  <div>
    <img :src="cat.url" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface CatInterface {
  id: string
  url: string
  width: number
  height: number
  breeds: [any]
}

export default defineComponent({
  props: {
    cat: {
      cat: Object as PropType<CatInterface>,
      required: true
    } as any
  }
})
</script>

<style>

</style>