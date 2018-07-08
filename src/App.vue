<template>
  <div id="app">
    <Navbar :class="{cv_bright: setting.isBright, cv_dark: !setting.isBright}"/>
    <router-view :class="{cv_bright: setting.isBright, cv_dark: !setting.isBright}"></router-view>
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
  methods: {
    sendSettingInfo() {
      const vm = this;
      vm.$eventHub.$emit('send-setting', vm.setting);
    },
    listenUpdateSettingInfo() {
      const vm = this;
      vm.$eventHub.$on('update-setting', (setting) => {
        vm.setting = setting;
      });
    },
    listenRequireSettingInfo() {
      const vm = this;
      vm.$eventHub.$on('require-setting', () => {
        vm.sendSettingInfo();
      });
    },
  },
  created() {
    this.listenRequireSettingInfo();
    this.listenUpdateSettingInfo();
  },
};
</script>

<style>
  #app {
    min-width: 1024px;
  }
</style>
