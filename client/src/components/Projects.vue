<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_PROJECTS } from '@/queries/projectQueries';
import { computed } from '@vue/reactivity';
import ProjectCard from '@/components/ProjectCard.vue';

const { result, loading, error } = useQuery(GET_PROJECTS);

const projects = computed(() => result?.value?.projects ?? []);
</script>

<template>
  <spinner v-if="loading"></spinner>
  <p v-if="error">{{ error }}</p>

  <div class="row mt-5">
    <project-card
      v-for="project in projects"
      :key="project.id"
      :project="project"
    ></project-card>
  </div>

  <p v-if="projects.length === 0">No Projects</p>
</template>
