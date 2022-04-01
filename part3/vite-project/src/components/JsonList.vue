<template>
  <div>
    <button @click="get">Load DATA</button>

    <h2>CI/CD</h2>
  </div>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    let items = ref();

    onMounted(() => {
      get();
    });

    async function get() {
      items.value = await axios
        .get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => response.data);
    }
    return { get, items };
  },
};
</script>
