<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
import AddClientModal from './components/AddClientModal.vue';
import Projects from './components/Projects.vue';
import Clients from './pages/Clients.vue';
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
