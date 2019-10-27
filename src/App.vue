<template>
  <div
    class="app"
    ref="app"
    :style="{backgroundColor: background}"
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
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Overlay from './components/Overlay.vue';
import Footer from './components/Footer.vue';
import { Okay } from './itisok';

@Component({
  components: {
    HelloWorld,
    Overlay,
    TheFooter: Footer,
  },
})
export default class App extends Vue {
  public $refs!: {
    app: HTMLDivElement;
  };

  @Prop({
    required: true,
    type: Array,
    default: () => ([]),
  })
  private itisok!: Okay[];

  private ok: Okay|null = null;

  private beforeMount() {
    this.change();
  }

  private mounted() {
    window.setInterval(this.change, 3500);
  }

  private change(): void {
    const next = Math.floor(Math.random() * this.length);
    this.ok = this.itisok[next];
  }

  get length(): number {
    return this.itisok.length;
  }

  get message(): string|undefined {
    return this.ok?.message;
  }

  get background(): string {
    return this.ok?.background ?? 'purple';
  }
}
</script>
