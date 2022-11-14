<template>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>

  <div v-else>
    <h1></h1>
    <CatPicture :cat="currentCat" />
    <button @click="likeCat">Like</button>
    <button @click="dislikeCat">Dislike</button>
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
        } as any;
    },
    methods: {
        nextCat() {
            this.catIndex++;
            if (this.catIndex >= this.allCats.length) {
                this.catIndex = 0;
            }
            this.currentCat = this.allCats[this.catIndex];
        },
        likeCat() {
            this.likedCats.push(this.currentCat);
            this.nextCat();
        },
    },
    mounted() {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
            .then(response => {
                this.allCats = response.data.map((cat: any) => {
                    return {
                        id: cat.id,
                        url: cat.url,
                        width: cat.width,
                        height: cat.height
                    }
                });
                this.currentCat = this.allCats[this.catIndex];
                this.loading = false;
            })
    },
    components: { CatPicture }
}

type ReactiveData = {
    currentCat: cat;
    allCats: cat[];
    likedCats: cat[];
    dislikedCats: cat[];
    catIndex: number;
    loading: boolean;
}

type cat = {
    id: string,
    url: string,
    width: number,
    height: number
}
</script>

<style>

</style>
