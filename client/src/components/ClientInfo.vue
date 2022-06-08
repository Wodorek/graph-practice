<script setup lang="ts">
import type { Client } from 'types';
import type { PropType } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  client: {
    required: true,
    type: Object as PropType<Client>,
  },
});

console.log(props.client);
</script>

<template>
  <h5 class="mt-5">Client Information</h5>
  <ul class="list-group">
    <li class="list-group-item">
      <font-awesome-icon class="icon" :icon="'id-badge'"></font-awesome-icon
      >{{ props.client.name }}
    </li>
    <li class="list-group-item">
      <font-awesome-icon class="icon" :icon="'envelope'"></font-awesome-icon
      >{{ props.client.email }}
    </li>
    <li class="list-group-item">
      <font-awesome-icon class="icon" :icon="'phone'"></font-awesome-icon
      >{{ props.client.name }}
    </li>
  </ul>
</template>
