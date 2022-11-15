<template>
  <div>
    <h1>Liked cats</h1>
    <ul>
      <li v-for="cat in likedCats" :key="cat.id">
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
      likedCats: [],
    } as any;
  },
  mounted() {
    this.likedCats = this.$store.state.liked;
  },
  components: { CatPicture },
};
</script>

<style></style>
