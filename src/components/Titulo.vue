<template>
    <center class="field">
      <span class="title blue">{{ texto }}</span>
    </center>
</template>

<script>
export default {
  props: ['texto']
}
</script>

<style scoped>
.blue {
  color:#2E64FE;
}

.title  {
  font-size: 3em;
}
</style>
