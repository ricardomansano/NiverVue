<template>
  <div class="hooks">

    <h2>Hooks</h2>
    <p>Você clicou {{count}} vezes</p>
    <button @click="setCount(count + 1)">
        Incrementa Hook->count
    </button>
  </div>
</template>

<script>
  // [*Getter_and_Setter]
  // O data() funciona como get
  // e o metodo setCount() como o set
  export default {
    name: 'hooks',
    data () {
      return {
        count: 0
      }
    },
    methods: {
      setCount(n) {
        this.count = n;
      }
    }
  }
</script>
