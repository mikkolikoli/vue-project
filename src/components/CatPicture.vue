<template>
  <div>
    <img v-if="type === 'normal'" :src="cat.url" width="400" height="400" />
    <img v-else-if="type === 'small'" :src="cat.url" width="100" height="100" />
    <img
      v-else-if="type === 'original'"
      :src="cat.url"
      width="400"
      height="400"
    />
    <p v-else>Something has gone wrong</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface CatInterface {
  id: string;
  url: string;
  width: number;
  height: number;
}

type Type = "normal" | "small" | "original";

export default defineComponent({
  props: {
    cat: {
      cat: Object as PropType<CatInterface>,
      required: true,
    } as any,
    type: {
      type: String as PropType<Type>,
    } as any,
  },
});
</script>

<style></style>
