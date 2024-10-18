<template>


  <div id="app">

    <nav>
      <router-link to="/App">Главная</router-link>
      <router-link to="/UpInCom">О нас</router-link>
    </nav>

    <router-view></router-view>

  </div>

  <div class="full-screen-bg">
    <div class="TxtHeader">время для сна</div>

    <div class="UpIn">Мне нужно проснуться в...</div>

    <div class="buttonBlock">

      <div class="blockKopok">
        <button class="buttonOneWithTwoOne my-object" @click="toggleBlocksHours">{{ UpInHourVisual }}</button>
        <div class="tochki">:</div>
        <button class="buttonOneWithTwo my-object" @click="toggleBlocksMinutes">{{ UpInMinutesVisual }}</button>
      </div>
      <button @click="goToRoute()" class="btnStrelka "><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
    </div>


    <div class="buttonBlock">

      <div class=" contetnt">
        <div class="blockClockUpIn">

          <div v-show="showBlocksHours" class="scroll-container BlockHoursUpIn">
            <div class=" scroll-content BlockHours ">

              <div v-for="(block, index) in blocksHours" :key="index">
                <div class="test"><button @click="setValuesHours(index); cloesVso()" class="btnmnogo">{{block.value}}</button></div>
              </div>


            </div>
          </div>



          <div class="scroll-container BlockMinutalUpIn" v-show="showBlocksMinutes">
            <div class=" BlockMinutes scroll-content">

              <div v-for="(block, index) in blocksMinutes" :key="index">
                <div class="test"><button @click="setValuesMinutes(index); cloesVso()" class="btnmnogo">{{block.value}}</button></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>


    <div class="UpInW">Я лягу спать в...</div>

    <div class="buttonBlock ">

      <div class=" contetnt ">
        <div class="blockClockUpIn ">

          <div v-show="showBlocksLyingInHours" class="scroll-containerDopBlock BlockHoursUpIn ">
            <div class=" scroll-content " >

              <div v-for="(block, index) in blocksHours" :key="index">
                <div class="test"><button @click="setValuesLyingInHours(index); cloesVso() " class="btnmnogoTwoBlackBlue">{{block.value}}</button></div>
              </div>

            </div>
          </div>

          <div v-show="showBlocksLyingInMinutas" class="scroll-containerDopBlock ">
            <div class=" LyingInMinutas scroll-content">

              <div v-for="(block, index) in blocksMinutes" :key="index">
                <div class="test"><button @click="setValuesLyingInMinutas(index); cloesVso()" class="btnmnogoTwoBlackBlue">{{block.value}}</button></div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div class="blockKopok">
        <button class="buttonOneWithTwoOneTwoBlock my-object" @click="toggleBlocksLyingInHours">{{ LivingInHours }}</button>
        <div class="tochki">:</div>
        <button class="buttonOneWithTwoBlock my-object" @click="toggleBlocksLyingInMinutas">{{ LyingInMinutasLogic }}</button>
      </div>
      <button class="btnStrelka"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
    </div>

    <div class="btnClass"><button class="btnVSleep">Спать сейчас 😴</button></div>
  </div>









</template>


<script setup>
import { defineComponent } from 'vue';
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router';


const router = useRouter();
function navigateToTestHtml() {
  window.location='TwoFiles.html'
}


let UpInHourVisual = ref('00');
let UpInMinutesVisual = ref('00');


let LogicalNumberHours = ref();
let LogicalNumberMinutes = ref();
let LyingInMinutasLogic = ref('00');
let LivingInHours = ref('00');


const showBlocksHours = ref(false);

const blocksHours = ref([
  { value: '01' },
  { value: '02' },
  { value: '03' },
  { value: '04' },
  { value: '05' },
  { value: '06' },
  { value: '07' },
  { value: '08' },
  { value: '09' },
  { value: '10' },
  { value: '11' },
  { value: '12' },
  { value: '13' },
  { value: '14' },
  { value: '15' },
  { value: '16' },
  { value: '17' },
  { value: '18' },
  { value: '19' },
  { value: '20' },
  { value: '21' },
  { value: '22' },
  { value: '23' },
]);

const toggleBlocksHours = () => {
  showBlocksHours.value = !showBlocksHours.value;

  showBlocksLyingInHours.value = false;
  showBlocksLyingInMinutas.value = false;
  showBlocksMinutes.value = false;

};

const setValuesHours = (index) => {
  const selectedBlock = blocksHours.value[index].value;
  UpInHourVisual.value = selectedBlock;
  LogicalNumberHours.value = selectedBlock.length === 2 ? selectedBlock[1] : selectedBlock; // Если 01, 02 то второй будет 1, 2
};

const showBlocksMinutes = ref(false);

const blocksMinutes = ref([

  { value: '05' },
  { value: '10' },
  { value: '15' },
  { value: '20' },
  { value: '25' },
  { value: '30' },
  { value: '35' },
  { value: '40' },
  { value: '45' },
  { value: '50' },
  { value: '55' },

]);

const toggleBlocksMinutes = () => {
  showBlocksMinutes.value = !showBlocksMinutes.value;

  showBlocksHours.value = false;
  showBlocksLyingInHours.value = false;
  showBlocksLyingInMinutas.value = false;

};

const setValuesMinutes = (index) => {
  const selectedBlock = blocksMinutes.value[index].value;
  UpInMinutesVisual.value = selectedBlock;
  LogicalNumberMinutes.value = selectedBlock ; // Если 01, 02 то второй будет 1, 2
};

function offShowBlockClock(){
  showBlocksMinutes.value = false;
  showBlocksHours.value = false;
}

const showBlocksLyingInMinutas = ref(false);

const toggleBlocksLyingInMinutas = () => {
  showBlocksLyingInMinutas.value = !showBlocksLyingInMinutas.value;

  showBlocksHours.value = false;
  showBlocksLyingInHours.value = false;

  showBlocksMinutes.value = false;
};

const setValuesLyingInMinutas = (index) => {
  const selectedBlock = blocksMinutes.value[index].value;
  LyingInMinutasLogic.value = selectedBlock;
};

const showBlocksLyingInHours = ref(false);

const toggleBlocksLyingInHours = () => {

  showBlocksLyingInHours.value = !showBlocksLyingInHours.value;

  showBlocksHours.value = false;
  showBlocksLyingInMinutas.value = false;
  showBlocksMinutes.value = false;

};

const setValuesLyingInHours = (index) => {
  LivingInHours.value = blocksHours.value[index].value;
};

function cloesVso(){
  showBlocksLyingInHours.value = false;
  showBlocksHours.value = false;
  showBlocksLyingInMinutas.value = false;
  showBlocksMinutes.value = false;
}




const goToRoute = () => {
  router.push('/Going');
};


</script>

<style scoped>

.BlockMinutalUpIn{
  margin-left: 5px;
}

.BlockHoursUpIn{
  margin-left: -151px;
  /*  pointer-events: none;  возможно придеться отказаться т к все прожимаетсья и активируеться другая кнопка */
}

.mBottonBlockOfButton{
  margin-bottom: 200px;
}


.contetnt{

  z-index: 100;
  position: absolute;

}

.blockClockUpIn{

  display: flex;
  z-index: 100;
  justify-content: center;

}

.w{
  color: black;
  font-size: 30px;
}


.scroll-container {

  height: 300px;
  overflow: auto;

}

.scroll-containerDopBlock{

  height: 300px;
  overflow: auto;

  position: absolute;
  top: -305px;

}

.scroll-content {

  display: flex;
  flex-direction: column;
  align-items: center;


}

.test.BlockMinutes .test {
  width: 100%;
  margin-bottom: 10px; /* Добавляет отступ между кнопками */
}


.my-object {
  border: 5px solid #ffffff;
  transition: 0.5s;
}

.my-object:focus {
  outline: 2px solid #bcbcbc; /* Добавляем обводку при фокусе */
  outline-offset: 0px; /* Устанавливаем отступ обводки от объекта */
}

.blockupIn{
  display: flex;
}

.btnmnogo{

  font-weight: lighter;

  color: #fdba74;
  font-size: 35px;
  border: none;
  cursor: pointer;


  padding-right: 10px;
  padding-left: 10px;

  margin-bottom: 5px;

}

.btnmnogoTwoBlackBlue{


  color: #c7d2fe;
  font-size: 35px;
  border: none;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;

}

.btnmnogoTwoBlackBlueDob{


  color: #c7d2fe;
  font-size: 35px;
  border: none;
  cursor: pointer;
  padding-left: 10px;
  margin-bottom: 5px;

}

.btnmnogoTwoBlackBlue:hover{
  background-color: #757575;
  color: white;
}

.btnmnogo:hover{
  background-color: #757575;
  color: white;
}

.test{

  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 60px;
  font-size: 35px;

  background-color: white;
  color: #fdba74;
}

.blockKopok:hover {

  background-color: rgba(0, 0, 0);

  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

}

.buttonOneWithTwoOne{

  padding-left: 15px;
  padding-right: 9px;

  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  border: 1px solid #3a3a3a;
  transition: 0.1s;
  color: #fdba74;

  font-size: 35px;
  font-weight: 500;

  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-right: 0;

}

.buttonOneWithTwoOneTwoBlock{

  padding-left: 15px;
  padding-right: 9px;

  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  border: 1px solid #3a3a3a;
  transition: 0.1s;
  color: #c7d2fe;

  font-size: 35px;
  font-weight: 500;

  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-right: 0;

}



.tochki{

  display: flex;

  font-size: 30px;
  color: #fdba74;
  background-color: rgba(0, 0, 0, 0.3);

  padding-top: 10px;
  padding-left: 0px;
  padding-right: 0px;

  border: 1px solid #3a3a3a;
  transition: 0.1s;

  border-left: 0;
  border-right: 0;
}

.blockKopok{
  display: flex;

}

.buttonOneWithTwoBlock{

  padding-top: 9px;
  padding-bottom: 9px;
  padding-right: 15px;
  padding-left: 9px;

  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: 1px solid #3a3a3a;
  transition: 0.1s;
  color: #c7d2fe;
  font-size: 35px;
  font-weight: 500;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  border-left: 0;

}

.buttonOneWithTwo{

  padding-top: 9px;
  padding-bottom: 9px;
  padding-right: 15px;
  padding-left: 9px;

  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: 1px solid #3a3a3a;
  transition: 0.1s;
  color: #fdba74;
  font-size: 35px;
  font-weight: 500;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  border-left: 0;

}

.buttonBlock{

  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 5px;

}

.btnStrelka{
  border-radius: 30px;

  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;

  margin-left: 10px;

  color: #fdba74;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: 1px solid #3a3a3a;

  transition: 0.1s;

}

.btnStrelka:hover{

  border: 1px solid #4a4abc;
  background-color: rgba(0, 0, 0);

}

.btnClass{
  margin-top: 20px;
  display: flex;
  justify-content: center;

}

.btnVSleep:hover{

  border: 1px solid #4a4abc;
  background-color: rgba(0, 0, 0);;

}

.btnVSleep{
  transition: 0.2s;
  cursor: pointer;
  color: #faebd7;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 12px;
  font-weight:bold;
  border-radius: 50px;
  border: 1px solid hsla(0, 0%, 100%, 0.5);

}

.UpIn{
  display: flex;
  justify-content: center;
  font-size: 29px;
  color: #fdba74;
  letter-spacing: -2px;
}

.UpInW{
  display: flex;
  justify-content: center;
  font-size: 27px;
  color: white;
  letter-spacing: -2px;
}

.UpInWTwoBlock{
  display: flex;
  justify-content: center;
  font-size: 27px;

  letter-spacing: -2px;
  color: #c7d2fe;
}



.TxtHeader {
  letter-spacing: 1px;
  margin-bottom: 20px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  color: white;
}

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
  background-image: url('assets/bg14.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

</style>


