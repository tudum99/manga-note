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
    @mousedown="startDrag"
  >
    <button class="close_btn" @click="toggleMemo">
      <div class="ico ico_close"></div>
    </button>

    <div class="row flex mb20">
      <div class="input_label">Input:</div>
      <div class="input_area">
        <textarea v-model="contents"></textarea>
        <div class="column">
          <button class="input_btn mb8">
            <div class="ico ico_keyboard" @click="toggleKeyboard"></div>
          </button>
          <button class="input_btn search" @click="search">
            <div class="ico ico_search"></div>
          </button>
        </div>
      </div>
    </div>

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
//import { translate } from './ask.js';

//const iframeSrc = "https://bato.si/title/157271-en-kaijuu-no-hanataba/2847902-vol_1-ch_1";
//const iframeSrc = "https://puppetron.vercel.app/";
//const iframeSrc = "https://bato.to/search";
const iframeSrc = "https://bato.to/chapter/2901842";

const input = ref('');
const output = ref('');
const contents = 
`1. Give a hiragana pronunciation of the following input in japanese.
2. Translate it from Japanese to English.
Input: ${input.value}`;
const memoOpen = ref(true);
const memoRef = ref(null);
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function startDrag(e) {
  if (!memoRef.value) return;

  isDragging = true;

  const rect = memoRef.value.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
  if (!isDragging || !memoRef.value) return;

  memoRef.value.style.left = `${e.clientX - offsetX}px`;
  memoRef.value.style.top = `${e.clientY - offsetY}px`;
}

function stopDrag() {
  isDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
}

function search() {
  console.log('AAA');
  //translate(contents);
}

function toggleKeyboard() {
  console.log('aa')
}

function toggleMemo() {
  memoOpen.value = !memoOpen.value;
}

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
});

</script>

<style>
</style>