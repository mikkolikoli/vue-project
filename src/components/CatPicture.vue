<template>
  <div>
    <img :src="cat.url" width="400" height="400" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default defineComponent({
  props: {
    cat: {
      cat: Object as PropType<Cat>,
      required: true,
    } as any,
  },
});
</script>

<style></style>
