<template>
  <div>
    <button @click="goBack">Go Back</button>
    <h2>Liked cats</h2>
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

<style></style>
