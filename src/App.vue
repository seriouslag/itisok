<template>
  <div class="app" ref="app">
    <overlay />
    <div class='content'>
      <transition name="slide-fade" mode="out-in" v-if="message">
        <hello-world
          :message="message"
          :key="message"
        />
      </transition>
    </div>
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

  private message = '';

  private mounted() {
    this.change();
    window.setInterval(this.change, 3500);
  }

  private change() {
    const next = Math.floor(Math.random() * this.itisok.length);
    const ok = this.itisok[next];
    this.$refs.app.style.backgroundColor = ok.background;
    this.message = ok.message;
  }

  get length() {
    return this.itisok.length;
  }
}
</script>
