<template>
<div class="overlay">
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Overlay extends Vue {}
</script>

<style lang="scss" scoped>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(rgba(17,17,17, 0.1) 10%, rgba(17,17,17, 0.2) 30%, rgba(17,17,17, 0.3) 70%);
  }
</style>
