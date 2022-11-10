<template>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>

  <div v-else>
    <h1></h1>
    <CatPicture :cat="currentCat" />
    <button @click="nextCat">Next cat</button>
  </div>
  
</template>

<script lang="ts">
import axios from 'axios'
import CatPicture from './components/CatPicture.vue'

export default {
    data() {
        return {
            currentCat: {},
            allCats: [],
            likedCats: [],
            dislikedCats: [],
            catIndex: 0,
            loading: true
        };
    },
    methods: {
        nextCat() {
            this.catIndex++;
            if (this.catIndex >= this.allCats.length) {
                this.catIndex = 0;
            }
            this.currentCat = this.allCats[this.catIndex];
        }
    },
    mounted() {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10?api_key=XWCx21D3P9WZ7q4g7ypM1QEoXqxqzCWw4adRJhX2Ep4gAAVjZYe5Xgs4go0lHlbZ")
            .then(response => {
            this.allCats = response.data;
            this.currentCat = response.data[this.catIndex];
            this.loading = false;
        })
    },
    components: { CatPicture }
}
</script>

<style>

</style>
