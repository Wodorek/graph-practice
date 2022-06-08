<script setup lang="ts">
import Spinner from '../components/Spinner.vue';
import { GET_PROJECT } from '../queries/projectQueries';
import { useQuery } from '@vue/apollo-composable';
import { useRoute, RouterLink } from 'vue-router';
import { computed } from '@vue/reactivity';
import ClientInfo from '../components/ClientInfo.vue';
import DeleteProjectButton from '../components/DeleteProjectButton.vue';
import EditProjectForm from '../components/EditProjectForm.vue';

const route = useRoute();
const id = route.params.id as string;

const { result, loading, error } = useQuery(GET_PROJECT, {
  id,
});

const project = computed(() => result?.value?.project ?? {});
const client = computed(() => project?.value?.client ?? {});

console.log(project);

console.log(client);
</script>

<template>
  <spinner v-if="loading"></spinner>
  <p v-if="error">{{ error }}</p>
  <div v-if="project && client" class="mx auto w-75 card p-5">
    <router-link to="/" class="btn btn-light btn-sm w-25 d-inline ms-auto"
      >Back</router-link
    >
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <h5 class="mt-3">Project Status</h5>
    <p class="lead">{{ project.status }}</p>
    <client-info :client="client"></client-info>
    <edit-project-form :project="project"></edit-project-form>
    <delete-project-button :projectId="id"></delete-project-button>
  </div>
</template>
