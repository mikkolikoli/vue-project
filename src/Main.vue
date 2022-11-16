<template>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>

  <div v-else>
    <h1></h1>
    <CatPicture :cat="currentCat" />
    <button @click="likeCat">Like</button>
    <button @click="dislikeCat">Dislike</button>
    <br />
    <button @click="this.$router.push('/liked')">Liked</button>
    <button @click="this.$router.push('/disliked')">Disliked</button>
  </div>
</template>

<script lang="ts">
import CatPicture from "./components/CatPicture.vue";

export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    likeCat() {
      this.$store.commit("addLiked", this.currentCat);
      
      this.loading = true;
      this.$store.commit("nextCat");
      this.loading = false;
    },
    dislikeCat() {
      this.$store.commit("addDisliked", this.currentCat);

      this.loading = true;
      this.$store.commit("nextCat");
      this.loading = false;
    },
  },
  computed: {
    currentCat() {
      return this.$store.state.currentCat;
    },
    allCats() {
      return this.$store.state.allCats;
    },
  },
  mounted() {
    if (this.allCats.length === 0) {
      this.$store.commit("setCats");
      this.loading = false;
    }
    else {
      this.loading = false;
    }
  },
  components: { CatPicture },
};
</script>

<style></style>
