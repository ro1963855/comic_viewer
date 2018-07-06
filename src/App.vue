<template>
  <div id="app">
    <Navbar :class="{cv_bright: setting.isBright, cv_dark: !setting.isBright}"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      setting: {
        isBright: true,
      },
    };
  },
};
</script>

<style>
  #app {
    min-width: 1024px;
  }
</style>
