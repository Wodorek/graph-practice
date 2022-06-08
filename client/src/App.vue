<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
import AddClientModal from './components/AddClientModal.vue';
</script>

<template>
  <Header />
  <div class="container">
    <add-client-modal></add-client-modal> <router-view></router-view>
  </div>
</template>

<style>
@import './assets/base.css';
</style>
