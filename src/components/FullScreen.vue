<template>
    <div class="cv_full_screen d-flex justify-content-center">
        <div class="cv_full_screen_wrap d-flex">
            <div class="cv_full_pager d-flex justify-content-center align-items-center"
                  :class="{disabled: comicSetting.pager.selected === 0}"
                  @click.stop="clickChangePage(-1)">
              <font-awesome-icon class="cv_full_pager_icon" :icon="['fas', 'angle-left']"></font-awesome-icon>
            </div>
            <div class="cv_full_img">
              <img :src="`static/comics/storyboard-${comicSetting.pager.selected + 1}.png`">
              <font-awesome-icon class="cv_cancel_full"
                                  :icon="['far', 'times-circle']"
                                  @click.stop="isFullScreen.state = false"></font-awesome-icon>
            </div>
            <div class="cv_full_pager d-flex justify-content-center align-items-center"
                  :class="{disabled: comicSetting.pager.selected === comicSetting.pager.options.length - 1}"
                  @click.stop="clickChangePage(1)">
              <font-awesome-icon class="cv_full_pager_icon" :icon="['fas', 'angle-right']"></font-awesome-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['comicSetting', 'isFullScreen'],
  name: 'cv_full_screen',
  methods: {
    clickChangePage(offset) {
      if (
        (offset === -1 && this.comicSetting.pager.selected === 0) ||
        (offset === 1 && this.comicSetting.pager.selected === this.comicSetting.pager.options.length - 1)
      ) {
        return;
      }

      this.comicSetting.pager.selected = this.comicSetting.pager.selected + offset;
    },
  },
};
</script>

