<template>
  <div class="iframe_container">
    <iframe
      :src="iframeSrc"
      class="fullscreen-iframe"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
  <!-- <button class="toggle_btn"></button> -->
  <button 
    class="transl_btn"
    @click="toggleMemo"
  >
  </button>

  <div 
    v-if="memoOpen"
    ref="memoRef"
    class="memo"
  >
    <button class="close_btn" @click="toggleMemo">
      <div class="ico ico_close"></div>
    </button>

    <div class="flex mb20">
      <div class="input_label">Input:</div>

      <div class="flex flex1 column">

        <div class="align_flex_end flex1 row gap8 mb8">
          <textarea v-model="input" id="input"></textarea>
          <button class="input_btn search" @click="search">
            <div class="ico ico_search"></div>
          </button>
        </div>

        <div class="row gap8">
          <button class="input_btn" @click="copyInput">
            <div class="ico ico_copy"></div>
          </button>
          <button class="input_btn" @click="toggleKeyboard">
            <div class="ico ico_keyboard"></div>
          </button>
          <button class="input_btn" @click="googleTranslate">
            <div class="ico ico_google_translate"></div>
          </button>

          <button class="input_btn ml8" @click="refreshInput">
            <div class="ico ico_refresh"></div>
          </button>
          <button class="input_btn" @click="clearInput">
            <div class="ico ico_clear"></div>
          </button>
        </div>
      </div>
    </div>

<div class="simple-keyboard">{{ keyboard }}</div>

    <div class="row gap5">
      <div class="output_label">Output:</div>
      <div class="output_area">
        <textarea v-model="output"></textarea>
      </div>
    </div>

  </div>
</template>

<script setup>
import './assets/css/main-layout.css';
import './assets/css/memo.css';
import './assets/css/common.css';
import './assets/css/icon.css';
import { ref, onBeforeUnmount } from 'vue';
import * as notify from "./utils/notify.js";

//import { translate } from './ask.js';

//const iframeSrc = "https://bato.si/title/157271-en-kaijuu-no-hanataba/2847902-vol_1-ch_1";
//const iframeSrc = "https://puppetron.vercel.app/";
//const iframeSrc = "https://bato.to/search";
const iframeSrc = "https://bato.to/chapter/2901842";

const output = ref('');
const input = ref(`1. Give a hiragana pronunciation of the following input in japanese.
2. Translate it from Japanese to English.
Input: `);
const memoOpen = ref(true);
const memoRef = ref(null);

function search() {
  console.log('AAA');
  //translate(input);
}

function copyInput() {
  const inputText = document.getElementById('input');
  inputText.select();
  inputText.setSelectionRange(0, 99999); // for mobile devices
  navigator.clipboard.writeText(inputText.value)
    .then(() => {
      notify.copy("Copied", { timeout: 500 });
    })
}

function googleTranslate() {
  const inputText = input.value;
  const encodedText = encodeURIComponent(inputText);
  const url = `https://translate.google.com/?hl=ru&sl=ja&tl=en&text=${encodedText}&op=translate`;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const popupWidth = 800;
  const popupHeight = (2 * screenHeight) / 3;

  const popup = window.open(url, 'Google translate', `scrollbars=1,resizable=yes,width=${popupWidth},height=${popupHeight},top=${screenHeight},right=${screenWidth}`);
  popup.focus();
}

function refreshInput() {
  input.value = `1. Give a hiragana pronunciation of the following input in japanese.
2. Translate it from Japanese to English.
Input: `;
}

function clearInput() {
  input.value = '';
}

function toggleMemo() {
  memoOpen.value = !memoOpen.value;
}

onBeforeUnmount(() => {
  //document.removeEventListener('mousemove', drag);
  //document.removeEventListener('mouseup', stopDrag);
});

</script>

<style>
</style>