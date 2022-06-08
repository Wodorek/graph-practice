<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
@import './assets/base.css';
</style>
