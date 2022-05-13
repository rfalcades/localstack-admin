<template>
    <div class="container">
      <div class="text-center">
        <h2 class="text-center mt-5">Top Services🍿</h2>
      </div>
      <hr>
      <div class="row" v-if="items.length > 0">
        <div class="col-md-3" v-for="(item, i) in items" :key="i">
          <item-card :item="item" />
        </div>
      </div>
    </div>
</template>

<script>

import ItemCard from "./components/ItemCard.vue";
import Resources from "./business/services/Resources.js"

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

    async getDummies() {
      this.items = await Resources.getItems();
    },

  },
  mounted() {
    this.getDummies()
  },
};
</script>