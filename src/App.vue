<template>
  <div
    class="app"
    ref="app"
    :style="{ backgroundColor: background }"
  >
    <overlay />
    <main class="content">
      <div role="marquee" aria-live="polite">
        <transition name="slide-fade" mode="out-in">
          <hello-world
            :message="message"
            :key="message"
            v-if="message"
          />
        </transition>
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Overlay from './components/Overlay.vue';
import Footer from './components/Footer.vue';
import { Okay, itisok } from './itisok';
import { PropType, onMounted, onBeforeMount, defineComponent, ref, Ref, computed } from 'vue';
import { backgroundTheme } from './logic/backgroundTheme';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Overlay,
    TheFooter: Footer,
  },
  props: {
    itisok: {
      type: Array as PropType<Okay[]>,
      required: true,
    },
  },
  setup (props, ctx) {
    return {
      ...backgroundTheme(props.itisok),
    };
  },
});
</script>
