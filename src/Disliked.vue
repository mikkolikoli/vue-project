<template>
  <div>
    <button @click="goBack">Go Back</button>
    <h2>Disliked cats</h2>
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

<style></style>
