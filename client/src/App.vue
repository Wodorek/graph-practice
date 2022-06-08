<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style>
@import './assets/base.css';
</style>
