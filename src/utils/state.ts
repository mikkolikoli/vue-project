import { createStore } from "vuex";
import axios from "axios";

const getNewCats = async () => {
  const response = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  return response;
};

const store = createStore({
  state() {
    return {
      liked: [],
      disliked: [],
      allCats: [],
      currentCat: {},
      index: 0,
    } as any;
  },
  mutations: {
    addLiked(state, payload) {
      state.liked.push(payload);
    },
    addDisliked(state, payload) {
      state.disliked.push(payload);
    },
    setCats(state) {
      getNewCats().then((response) => {
        state.allCats = response.data.map((cat: any) => {
          return {
            id: cat.id,
            url: cat.url,
            width: cat.width,
            height: cat.height,
          };
        });
        state.currentCat = state.allCats[state.index];
      });
    },
    nextCat(state) {
      state.index++;

      if (state.index > 9) {
        state.index = 0;

        getNewCats().then((response) => {
          state.allCats = response.data.map((cat: any) => {
            return {
              id: cat.id,
              url: cat.url,
              width: cat.width,
              height: cat.height,
            };
          });
          state.currentCat = state.allCats[state.index];
        });
      } else {
        state.currentCat = state.allCats[state.index];
      }
    },
  },
});

export default store;
