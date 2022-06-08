<script setup lang="ts">
import type { PropType } from 'vue';
import type { Client } from '../../types';

const props = defineProps({
  client: {
    required: true,
    type: Object as PropType<Client>,
  },
});
</script>

<template>
  <tr>
    <td>{{ props.client.name }}</td>
    <td>{{ props.client.email }}</td>
    <td>{{ props.client.phone }}</td>
    <td>
      <button class="btn btn-danger btn-sm">
        <font-awesome-icon
          size="1"
          :icon="['fas', 'trash-can']"
        ></font-awesome-icon>
      </button>
    </td>
  </tr>
</template>

<style></style>
