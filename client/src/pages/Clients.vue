<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useQuery } from '@vue/apollo-composable';
import { GET_CLIENTS } from '../queries/clientQueries';
import ClientRow from '../components/ClientRow.vue';
import Spinner from '../components/Spinner.vue';

const { result, loading, error } = useQuery(GET_CLIENTS);

const clients = computed(() => result?.value?.clients ?? []);

console.log(result.value);
</script>

<template>
  <div>
    <spinner v-if="loading"></spinner>
    <p v-else-if="error">{{ error }}</p>
    <table class="table table-hover mt-3" v-if="clients">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <client-row
          v-for="client in clients"
          :key="client.id"
          :client="client"
        />
      </tbody>
    </table>
  </div>
</template>
