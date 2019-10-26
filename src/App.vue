<template>
  <div
    class="app"
    ref="app"
    :style="{backgroundColor: ok.background}"
    v-if="ok"
  >
    <overlay />
    <main class="content" v-if="ok.message">
      <transition name="slide-fade" mode="out-in" >
        <hello-world
          :message="ok.message"
          :key="ok.message"
        />
      </transition>
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
}
</script>
