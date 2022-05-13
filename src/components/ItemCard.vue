<template>
  <main>
    <div class="card mb-4 shadow-lg border border-secondary bg-dark text-light">
        <div class="card-body" @click="teste2">
            <h3>{{ item.ServiceType }}</h3>
            <p class="card-text">{{ item.Name }}</p>
            <p>{{ item.CreationDate }} </p>
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
  methods:{
      teste() {
          alert('Fuck!');
      },
      teste2() {
          alert('Fuck 2!');
      }      
  }
};
</script>

<style scoped>

    .card-body {
        cursor: pointer;               
    }


</style>