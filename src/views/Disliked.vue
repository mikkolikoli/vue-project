<template>
  <header>
    <button @click="goBack" class="backButton">Go Back</button>
    <h2>Disliked cats</h2>
  </header>

  <article>
    <CatPicture v-for="cat in dislikedCats" :key="cat.id" :cat="cat" />
  </article>
</template>

<script lang="ts">
import CatPicture from "../components/CatPicture.vue";

export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
  computed: {
    dislikedCats() {
      return this.$store.state.disliked;
    },
  },
  components: { CatPicture },
};
</script>

<style scoped></style>
