<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from "@/components/Calculator.vue";

export default {
  name: "Home",
  components: {
    Calculator,
  },
};
</script>
