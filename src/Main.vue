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
import axios from "axios";
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
      this.$store.commit("nextCat");
    },
    dislikeCat() {
      this.$store.commit("addDisliked", this.currentCat);
      this.$store.commit("nextCat");
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
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => {
        const allCats = response.data.map((cat: any) => {
          return {
            id: cat.id,
            url: cat.url,
            width: cat.width,
            height: cat.height,
          };
        });
        this.$store.commit("setCats", allCats);
        this.$store.commit("setCurrentCat", allCats[0]);
        this.loading = false;
      });
  },
  components: { CatPicture },
};
</script>

<style></style>
