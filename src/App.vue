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

  private lastOk: Okay|null = null;
  private ok: Okay|null = null;

  private fadeThemeInterval: number|undefined;
  private fadeIndex = 0;

  private metaTheme: HTMLMetaElement|null|undefined;

  private beforeMount() {
    this.change();
  }

  private mounted() {
    window.setInterval(this.change, 3500);
    this.metaTheme = (document.querySelector('meta[name=theme-color]') as HTMLMetaElement) ?? null;
  }

  private change(): void {
    const next = Math.floor(Math.random() * this.length);
    this.lastOk = this.ok;
    this.ok = this.itisok[next];
    this.fadeTheme();
  }

  private fadeTheme() {
    if (!this.lastOk?.background || !this.ok?.background) {
      return;
    }
    const fadeArray = this.gradient(this.lastOk.background, this.ok.background, 10);
    this.startChangeThemeInterval(fadeArray);
  }

  private startChangeThemeInterval(fadeArray: string[]) {
    this.fadeIndex = 0;
    this.fadeThemeInterval = window.setInterval(() => this.handleChangeThemeInterval(fadeArray, this.fadeIndex), 40);
  }

  private handleChangeThemeInterval(fadeArray: string[], index: number) {
    this.changeTheme(fadeArray[index]);
    if (index === (fadeArray.length - 1)) {
      window.clearInterval(this.fadeThemeInterval);
      this.fadeThemeInterval = undefined;
      this.fadeIndex = 0;
    }
  }

  private changeTheme(color: string) {
    if (this.metaTheme) {
      this.metaTheme.setAttribute('content', color);
      this.fadeIndex += 1;
    }
  }

  private gradient(startColor: string, endColor: string, steps: number) {
      const start = {
        Hex: startColor,
        R: parseInt(startColor.slice(1, 3), 16),
        G: parseInt(startColor.slice(3, 5), 16),
        B: parseInt(startColor.slice(5, 7), 16),
      };
      const end = {
        Hex: endColor,
        R: parseInt(endColor.slice(1, 3), 16),
        G: parseInt(endColor.slice(3, 5), 16),
        B: parseInt(endColor.slice(5, 7), 16),
      };
      const diffR = end.R - start.R;
      const diffG = end.G - start.G;
      const diffB = end.B - start.B;

      const stepsHex: string[] = new Array();
      const stepsR: number[] = new Array();
      const stepsG: number[] = new Array();
      const stepsB: number[] = new Array();

      for (let i = 0; i <= steps; i++) {
        stepsR[i] = start.R + ((diffR / steps) * i);
        stepsG[i] = start.G + ((diffG / steps) * i);
        stepsB[i] = start.B + ((diffB / steps) * i);
        stepsHex[i] = `#${Math.round(stepsR[i]).toString(16)}${Math.round(stepsG[i]).toString(16)}${Math.round(stepsB[i]).toString(16)}`;
      }
      return stepsHex;
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
