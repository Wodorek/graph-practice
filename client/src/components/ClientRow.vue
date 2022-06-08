<script setup lang="ts">
import type { PropType } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '@/queries/clientQueries';
import { GET_PROJECTS } from '@/queries/projectQueries';
import type { Client } from '../../types';

const props = defineProps({
  client: {
    required: true,
    type: Object as PropType<Client>,
  },
});

const { mutate: deleteClient } = useMutation(DELETE_CLIENT, {
  refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
});
</script>

<template>
  <tr>
    <td>{{ props.client.name }}</td>
    <td>{{ props.client.email }}</td>
    <td>{{ props.client.phone }}</td>
    <td>
      <button
        @click="deleteClient({ id: props.client.id })"
        class="btn btn-danger btn-sm"
      >
        <font-awesome-icon :icon="['fas', 'trash-can']"></font-awesome-icon>
      </button>
    </td>
  </tr>
</template>

<style></style>
