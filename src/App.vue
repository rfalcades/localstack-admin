<template>
  <div id="app">
    <div class="container">
      <div class="text-center">
        <h2 class="text-center mt-5">Top Services🍿</h2>
      </div>

      <div class="row" v-if="items.length > 0">
        <div class="col-md-3" v-for="(item, i) in items" :key="i">
          <item-card :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ItemCard from "./components/ItemCard.vue";
export default {
  name: "App",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {

    getDummies() {
      this.items = [ { "Id" :  1, "Descricao" : "Item 1" }, 
                     { "Id" :  2, "Descricao" : "Item 2" },
                     { "Id" :  3, "Descricao" : "Item 3" }]
    },

    getTrendingMovies(category) {
      return fetch(
        `https://api.themoviedb.org/3/trending/movie/${category}?api_key=${this.apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.movies = data.results;
        });
    },
  },
  mounted() {
    this.getDummies()
  },
};
</script>