<template>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>

  <div v-else>
    <header>
      <h1>Rate the cat</h1>
      <div class="headerButtons">
        <button @click="this.$router.push('/liked')" class="linkButton">
          Liked cats
        </button>
        <button @click="this.$router.push('/disliked')" class="linkButton">
          Disliked cats
        </button>
      </div>
    </header>

    <article>
      <CatPicture :cat="currentCat" :type="'normal'" />
      <br />
      <button @click="likeCat" class="iconButton">
        <img src="./assets/like.svg" alt="Like" />
      </button>
      <button @click="dislikeCat" class="iconButton">
        <img src="./assets/dislike.svg" alt="Dislike" />
      </button>
    </article>
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
    } else {
      this.loading = false;
    }
  },
  components: { CatPicture },
};
</script>

<style>
header {
  margin: 1em;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5em;
}
</style>
