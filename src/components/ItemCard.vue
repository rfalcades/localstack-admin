<template>
  <main>
    <div class="card mb-4 shadow-lg border border-secondary bg-dark text-light">
        <div class="card-body">
            <p class="card-text">{{ item.Id }} - {{ item.Descricao }}</p>
        </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "ItemCard",
  props: {
      item: {
        type: Object,
        required: true,
    },
  },  
};
</script>