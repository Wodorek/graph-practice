<script setup lang="ts">
import type { PropType } from 'vue';
import type { Project } from '../../types';

const props = defineProps({
  project: {
    required: true,
    type: Object as PropType<Project>,
  },
});
</script>

<template>
  <div class="col-md-6">
    <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">{{ props.project.name }}</h5>
          <a class="btn btn-light" :href="`/projects/${props.project.id}`"
            >View</a
          >
        </div>
        <p class="small">
          Status: <strong>{{ props.project.status }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>
