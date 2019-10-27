<template>
  <div class="hello">
    <span>It is ok</span>
    <span v-if="message">
      {{message}}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private message!: string;
}
</script>
