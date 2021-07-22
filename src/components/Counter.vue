<template>
  <div>
    <button @click="count++" class="btn-count-up">Count up</button>
    <p class="result">Total clicks: {{ count }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return { count: 0 };
  },
};
</script>
