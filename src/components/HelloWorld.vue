<template>
  <div class="hello">
    <span>It is ok</span>
    <span v-if="message">
      {{message}}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  components: {
  },
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup () {
    return {
    };
  },
});
</script>
