<template>
  <header>
    <button @click="goBack" class="backButton">Go Back</button>
    <h2>Liked cats</h2>
  </header>

  <article>
    <CatPicture
      v-for="cat in likedCats"
      :key="cat.id"
      :cat="cat"
      :type="'small'"
    />
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
    likedCats() {
      return this.$store.state.liked;
    },
  },
  components: { CatPicture },
};
</script>

<style scoped></style>
