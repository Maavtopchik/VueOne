<template>

  <div id="app">

    <nav>
      <router-link to="/App">Главная</router-link>
      <router-link to="/UpInCom">О нас</router-link>
    </nav>

    <router-view></router-view>

  </div>

  <div class="btnBlock">
    <button @click=" goToRoute() " class="btnHod">Go</button>
  </div>

</template>

<style>

.btnBlock{
  display: flex;
  justify-content: center;
  align-items: center;


}

.btnHod{
  font-size: 40px;
  cursor: pointer;
}

</style>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();


const goToRoute = () => {
  router.push('/UpInCom');
};



</script>