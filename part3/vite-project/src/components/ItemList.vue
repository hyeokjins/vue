<template>
  <button @click="loadData">Load ItemList</button>
  <hr><h1>CI/CD</h1><hr>
  <ul>
    <li v-for="(name, idx) in names" :key="idx">
      {{ name }}
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const names = ref(["a", "b"]);

    async function loadData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      names.value = result.data;
    }

    onMounted(() => {
      loadData();
    });

    return { names, loadData };
  },
};
</script>
