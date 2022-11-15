<template>
  <div>
    <h1>Disliked cats</h1>
    <ul>
      <li v-for="cat in dislikedCats" :key="cat.id">
        <CatPicture :cat="cat" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import CatPicture from "./components/CatPicture.vue";

export default {
  data() {
    return {
      disLikedCats: [],
    } as any;
  },
  mounted() {
    this.dislikedCats = this.$store.state.disLiked;
  },
  components: { CatPicture },
};
</script>

<style></style>
