<template>
  <div id="app">
    <Navbar :class="{cv_bright: setting.isBright, cv_dark: !setting.isBright}"/>
    <router-view/>
    <button @click="setting.isBright = !setting.isBright">Change Theme</button>
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
