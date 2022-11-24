<template>
  <header>
    <button @click="this.$router.push('/liked')" class="linkButton">
      Liked cats
    </button>
    <button @click="this.$router.push('/disliked')" class="linkButton">
      Disliked cats
    </button>
    <h1>Rate the cat</h1>
  </header>

  <article>
    <CatPicture :cat="currentCat" :type="'normal'" />
    <br />

    <button @click="dislikeCat" class="iconButton">
      <img src="../assets/dislike.svg" alt="Dislike" />
    </button>
    <button @click="likeCat" class="iconButton">
      <img src="../assets/like.svg" alt="Like" />
    </button>
  </article>
</template>

<script lang="ts">
import CatPicture from "../components/CatPicture.vue";

export default {
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
    if (this.allCats.length === 0) {
      this.$store.commit("setCats");
    } else {
    }
  },
  components: { CatPicture },
};
</script>

<style scoped>
header {
  margin: 1em;
}

.linkButton {
  background-color: #3a3a3a;
  color: white;
}

.linkButton:hover {
  background-color: #4f4f4f;
}

.iconButton {
  background-color: transparent;
}

.iconButton:hover {
  background-color: #282828;
}

.iconButton:focus,
.iconButton:focus-visible {
  outline: none;
}
</style>
