<script setup lang="ts">
import {
  NConfigProvider,
  NDialogProvider,
  NMessageProvider
} from 'naive-ui';
import store from './store/store';

store.state.display.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

const themeOverrides = {
  common: {
    "primaryColor": "#8CC084FF",
    "primaryColorHover": "#9ED995FF",
    "primaryColorPressed": "#79C66DFF",
    "primaryColorSuppl": "#47953BFF",
  },
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-dialog-provider>
      <n-message-provider>
        <div class="app">
          <router-view />
        </div>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style lang="less">
@import "./style.css";

#app {
  margin: 0 auto;
  padding: 0;
}
</style>