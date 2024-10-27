
<template>
    <div>
      <p data-testid="counter-value">Contador: {{ count }}</p>
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      }
    }
  };
  </script>
  