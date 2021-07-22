<template>
  <div>
    <input type="text" v-model="firstNumber" class="firstNumber" />
    <input type="text" v-model="secondNumber" class="secondNumber" />
    <button class="btn-calculate" @click="calculate">Calculate</button>
    <p class="result">Result: {{ result }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return { firstNumber: 0, secondNumber: 0, result: 0 };
  },
  methods: {
    calculate() {
      this.result = Number(this.firstNumber) + Number(this.secondNumber);
    },
  },
};
</script>
