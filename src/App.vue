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
    "primaryColor": "#000000",
    "primaryColorHover": "#000000",
    "primaryColorPressed": "#000000",
    "primaryColorSuppl": "#000000",
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