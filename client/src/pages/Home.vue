<script setup lang="ts">
import AddClientModal from '../components/AddClientModal.vue';
import Clients from '../pages/Clients.vue';
import Projects from '../components/Projects.vue';
import AddProjectModal from '../components/AddProjectModal.vue';
</script>

<template>
  <div class="d-flex gap-3 mb-4">
    <add-client-modal></add-client-modal>
    <add-project-modal></add-project-modal>
  </div>
  <projects></projects>
  <hr />
  <clients></clients>
</template>
