<template>
  <div class="cv_navbar">
    <header class="cv-nabar-header d-flex justify-content-center align-items-center">
      <router-link :to="{ name: 'Home' }">
        <span class="title">Comicomic</span>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'cv_navbar',
};
</script>
