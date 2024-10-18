<template>


  <div>
    <h1>Главная страница</h1>
    <router-link to="components/About.vue">Перейти на страницу "О нас"</router-link>
  </div>


</template>


<style scoped>

.full-screen-bg {
  font-family: "Signika", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "GRAD" 0;

  overflow: hidden;



  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('src/assets/bg14.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // Вы можете добавить свою логику здесь, если нужно
    return {};
  },
});
</script>
