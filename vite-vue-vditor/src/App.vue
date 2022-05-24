<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'

import { ref, onMounted } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

const vditor = ref<Vditor | null>(null);

onMounted(() => {
    vditor.value = new Vditor('vditor', {
        after: () => {
            // vditor.value is a instance of Vditor now and thus can be safely used here
            vditor.value!.setValue('Vue Composition API + Vditor + TypeScript Minimal Example');
        },
    });
});
</script>

<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->

    <div id="vditor" />
</template>

<style>

</style>
