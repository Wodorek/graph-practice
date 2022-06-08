<script setup lang="ts">
import AddClientModal from '../components/AddClientModal.vue';
import Clients from '../pages/Clients.vue';
import Projects from '../components/Projects.vue';
</script>

<template>
  <add-client-modal></add-client-modal>
  <projects></projects>
  <hr />
  <clients></clients>
</template>
