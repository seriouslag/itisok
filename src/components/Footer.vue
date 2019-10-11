<template>
    <footer class="footer">
      <div class="item">
        You're not alone.
      </div>
      <div class="item">
        <div>
          <a
            class="link"
            href="tel:1-800-273-8255"
            aria-labelledby="hotline"
          >
            1-800-273-8255
          </a>
        </div>
        <div id="hotline">
          National Suicide Prevention Lifeline
        </div>
      </div>
      <div class="item">
        <a
          class="link"
          href="http://www.suicidepreventionlifeline.org/GetHelp/LifelineChat.aspx"
        >
          Chat
        </a>
      </div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>
