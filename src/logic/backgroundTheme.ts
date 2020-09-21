import { Okay } from '@/itisok';
import { Ref, ref, computed, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import { gradient } from './gradient';

export function backgroundTheme (itisok: Okay[]) {
  const lastOk: Ref<Okay | null> = ref(null);
  const ok: Ref<Okay | null> = ref(null);

  let fadeThemeInterval: number | undefined;
  let fadeIndex = 0;

  let initThemeColor: string = '';
  const metaTheme: Ref<HTMLMetaElement | null | undefined> = ref(null);

  const length = computed(() => itisok.length);
  const message = computed(() => ok.value?.message ?? '');
  const background = computed(() => ok.value?.background ?? 'purple');

  let windowTimer: number|undefined;

  function fadeTheme () {
    if (
      (!lastOk.value?.background && initThemeColor === '') ||
      !ok.value?.background
    ) {
      return;
    }
    const fadeArray = gradient(
      lastOk.value?.background ?? initThemeColor,
      ok.value.background,
      10,
    );
    startChangeThemeInterval(fadeArray);
  }

  function startChangeThemeInterval (fadeArray: string[]) {
    fadeIndex = 0;
    fadeThemeInterval = window.setInterval(
      () => handleChangeThemeInterval(fadeArray, fadeIndex),
      40,
    );
  }

  function change () {
    const next = Math.floor(Math.random() * length.value);
    lastOk.value = ok.value;
    ok.value = itisok[next];
    if (!document.hidden) {
      fadeTheme();
    } else {
      window.clearInterval(fadeThemeInterval);
      fadeThemeInterval = undefined;
      fadeIndex = 0;
    }
  }

  function handleChangeThemeInterval (fadeArray: string[], index: number) {
    changeTheme(fadeArray[index]);
    if (index === fadeArray.length - 1 || document.hidden) {
      window.clearInterval(fadeThemeInterval);
      fadeThemeInterval = undefined;
      fadeIndex = 0;
    }
  }

  function changeTheme (color: string) {
    if (metaTheme.value) {
      metaTheme.value.setAttribute('content', color);
      fadeIndex += 1;
    }
  }

  onBeforeMount(() => {
    change();
  });
  onMounted(() => {
    windowTimer = window.setInterval(() => change(), 3500);
    metaTheme.value =
      (document.querySelector('meta[name=theme-color]') as HTMLMetaElement) ??
      null;
    initThemeColor = metaTheme.value.getAttribute('content') ?? '';
    fadeTheme();
  });
  onBeforeUnmount(() => {
    window.clearInterval(windowTimer);
  });
  return {
    length,
    message,
    background,
  };
}
