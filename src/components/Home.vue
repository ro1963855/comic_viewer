<template>
  <div class="cv_home d-flex justify-content-center align-items-center">
    <div class="wrap">
      <img class="cv_ad" src="@/assets/ad/ad-1.png">
      <div class="cv_comic">
        <div class="cv_cover">
          <img src="@/assets/ad/comic cover.png">
        </div>
        <div class="cv_desc">
          <div class="cv_comic_header d-flex justify-content-center align-items-center">
            <span>MY HEXSCHOOL</span>
          </div>
          <div class="cv_info">
            <div class="cv_info_item">
              <span class="cv_info_title">Genres</span>
              <span class="cv_info_content">Fusce/vehicula/dolor</span>
            </div>
            <div class="cv_info_item">
              <span class="cv_info_title">Author</span>
              <span class="cv_info_content">Namae Shiranai</span>
            </div>
            <div class="cv_info_item">
              <span class="cv_info_title">Status</span>
              <span class="cv_info_content">Ongoing</span>
            </div>
            <div class="cv_info_item">
              <span class="cv_info_title">Rate</span>
              <span class="cv_info_content">
                <font-awesome-icon class="cv-rate" :icon="['fas', 'star']"></font-awesome-icon>
                <font-awesome-icon class="cv-rate" :icon="['fas', 'star']"></font-awesome-icon>
                <font-awesome-icon class="cv-rate" :icon="['fas', 'star']"></font-awesome-icon>
                <font-awesome-icon class="cv-rate" :icon="['fas', 'star']"></font-awesome-icon>
                <font-awesome-icon class="cv-rate" :icon="['far', 'star']"></font-awesome-icon>
              </span>
            </div>
            <div class="cv_summary">
              <span class="cv_info_title">Summary</span>
              <span class="cv_info_detail">If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.</span>
              <span class="cv_info_detail">Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.</span>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <img class="cv_ad" src="@/assets/ad/ad-2.png">
      <div class="cv_chapter">
        <div class="cv_chapter_title d-flex justify-content-center align-items-center">
          <span>All Chapters</span>
        </div>
        <div class="cv_chapter_content">
          <div class="cv_chapter_name">Chapter 1: The F2E Challenge Start!</div>
          <div class="cv_chapter_name cv_chapter_new">Chapter 2: Todo List is Going Crazy!</div>
        </div>
      </div>
      <img class="cv_ad" src="@/assets/ad/ad-3.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'cv_home',
};
</script>
