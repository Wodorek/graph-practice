<script setup lang="ts">
import type { PropType } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import type { Client } from '../../types';
import { GET_CLIENTS } from '@/queries/clientQueries';

const props = defineProps({
  client: {
    required: true,
    type: Object as PropType<Client>,
  },
});

const deleteClient = useMutation(DELETE_CLIENT, {
  variables: {
    id: props.client.id,
  },
  update(cache, { data: { deleteClient } }) {
    const { clients } = cache.readQuery({
      query: GET_CLIENTS,
    }) as any;

    cache.writeQuery({
      query: GET_CLIENTS,
      data: {
        clients: clients.filter(
          (client: Client) => client.id !== deleteClient.id
        ),
      },
    });
  },
});
</script>

<template>
  <tr>
    <td>{{ props.client.name }}</td>
    <td>{{ props.client.email }}</td>
    <td>{{ props.client.phone }}</td>
    <td>
      <button @click="deleteClient.mutate()" class="btn btn-danger btn-sm">
        <font-awesome-icon :icon="['fas', 'trash-can']"></font-awesome-icon>
      </button>
    </td>
  </tr>
</template>

<style></style>
