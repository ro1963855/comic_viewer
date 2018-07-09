<template>
  <div class="cv_reader d-flex justify-content-center align-items-center">
    <div class="wrap">
      <img class="cv_ad" src="@/assets/ad/ad-1.png">
      <div class="cv_reader_header d-flex align-items-center justify-content-between w-100">
        <div class="d-flex justify-content-center align-items-center">
          <router-link :to="{ name: 'Home' }" class="cv_reader_subject">
            <span>My Hexschool</span>
          </router-link>
          <font-awesome-icon class="cv_reader_caret" :icon="['fas', 'caret-right']"></font-awesome-icon>
          <b-form-select class="cv_reader_selector"
                          v-model="comicSetting.chapter.selected"
                          :options="comicSetting.chapter.options" />
          <b-form-select class="cv_reader_selector"
                          v-model="comicSetting.pager.selected"
                          :options="comicSetting.pager.options" />
        </div>
        <div class="cv_theme_switcher d-flex justify-content-center align-items-center">
          <font-awesome-icon class="cv_switcher_icon" :icon="['fas', 'sun']"></font-awesome-icon>
          <div class="cv_switcher_toggle d-flex" @click="updateSettingInfo">
            <div class="cv_switcher_btn" :class="{on: setting.isBright, off: !setting.isBright}"></div>
            <div class="cv_switcher_btn" :class="{on: !setting.isBright, off: setting.isBright}"></div>
          </div>
          <font-awesome-icon class="cv_switcher_icon" :icon="['far', 'moon']"></font-awesome-icon>
        </div>
      </div>
      <img class="cv_ad" src="@/assets/ad/ad-2.png">
      <div class="cv_reader_body d-flex justify-content-center">
        <div class="cv_page_changer cv_page_up d-flex justify-content-center align-items-center"
              :class="{disabled: comicSetting.pager.selected === 0}"
              @click.stop="clickChangePage(-1)">
          <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
        </div>
        <div class="cv_comic_image">
          <img :src="`static/comics/storyboard-${comicSetting.pager.selected + 1}.png`"
                @click="isFullScreen.state = true">
        </div>
        <div class="cv_page_changer cv_page_down d-flex justify-content-center align-items-center"
              :class="{disabled: comicSetting.pager.selected === comicSetting.pager.options.length - 1}"
              @click.stop="clickChangePage(1)">
          <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
        </div>
      </div>
      <div class="cv_reader_footer d-flex">
        <div class="cv_comic_previewer"
              v-for="comic in comicSetting.pager.options"
              :key="comic.value"
              @click="comicSetting.pager.selected = comic.value">
          <div class="cv_previewer_page" v-if="comicSetting.pager.selected !== comic.value">
            {{ formatNumber(comic.value + 1) }}
          </div>
          <div class="d-flex justify-content-center align-items-center cv_previewer_trangle"
                v-if="comicSetting.pager.selected === comic.value">
            <div class="cv_previewer_active_top"></div>
          </div>
          <div class="cv_previewer_img" :class="{active: comicSetting.pager.selected === comic.value}">
            <img :src="`static/comics/storyboard-${comic.value + 1}.png`">
          </div>
        </div>
        <div class="cv_comic_previewer d-flex align-items-end">
          <div class="cv_previewer_nextChapter d-flex justify-content-center align-items-center">
            <font-awesome-icon class="cv_next_page_icon"
                                :icon="['fas', 'angle-double-right']"></font-awesome-icon>
          </div>
        </div>
      </div>
      <img class="cv_ad" src="@/assets/ad/ad-3.png">
    </div>
    <full-screen v-if="isFullScreen.state"
                  :comicSetting="comicSetting"
                  :isFullScreen="isFullScreen"></full-screen>
  </div>
</template>

<script>
import FullScreen from '@/components/FullScreen';

export default {
  name: 'cv_reader',
  components: {
    FullScreen,
  },
  data() {
    return {
      setting: {},
      isFullScreen: {
        state: false,
      },
      comicSetting: {
        chapter: {
          selected: 0,
          options: [
            { value: 0, text: 'Chapter 1' },
            { value: 1, text: 'Chapter 2' },
          ],
        },
        pager: {
          selected: 0,
          options: [
            { value: 0, text: 'Page 1' },
            { value: 1, text: 'Page 2' },
            { value: 2, text: 'Page 3' },
            { value: 3, text: 'Page 4' },
            { value: 4, text: 'Page 5' },
            { value: 5, text: 'Page 6' },
            { value: 6, text: 'Page 7' },
            { value: 7, text: 'Page 8' },
            { value: 8, text: 'Page 9' },
            { value: 9, text: 'Page 10' },
            { value: 10, text: 'Page 11' },
            { value: 11, text: 'Page 12' },
          ],
        },
      },
    };
  },
  methods: {
    // emit
    listenSendSettingInfo() {
      const vm = this;
      vm.$eventHub.$on('send-setting', (setting) => {
        vm.setting = setting;
      });
    },
    updateSettingInfo() {
      const vm = this;
      vm.setting.isBright = !vm.setting.isBright;
      vm.$eventHub.$emit('update-setting', vm.setting);
    },
    requireSettingInfo() {
      const vm = this;
      vm.$eventHub.$emit('require-setting', vm.setting);
    },
    clickChangePage(offset) {
      if (
        (offset === -1 && this.comicSetting.pager.selected === 0) ||
        (offset === 1 && this.comicSetting.pager.selected === this.comicSetting.pager.options.length - 1)
      ) {
        return;
      }

      this.comicSetting.pager.selected = this.comicSetting.pager.selected + offset;
    },
    formatNumber(number) {
      let result = '';
      if (number < 10) {
        result = `0${number}`;
      } else {
        result = `${number}`;
      }

      return result;
    },
  },
  created() {
    this.listenSendSettingInfo();
    this.requireSettingInfo();
  },
};
</script>
