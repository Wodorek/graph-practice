<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { useMutation } from '@vue/apollo-composable';
import { UPDATE_PROJECT } from '@/mutations/projectMutations';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const { mutate: updateProject } = useMutation(UPDATE_PROJECT);

const name = ref('');
const description = ref('');
const status = ref('new');

function submitHandler(e: Event) {
  e.preventDefault();
  if (name.value === '' || description.value === '' || status.value === '') {
    alert('Please fill in all fields');
    return;
  }

  updateProject({
    id: props.project.id,
    name: name.value,
    description: description.value,
    status: status.value,
  });
}
</script>

<template>
  <div class="mt-5">
    <h3>Update Project Details</h3>
    <form @submit="(e) => submitHandler(e)">
      <div class="mb-3">
        <label class="form-label" for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="description">description</label>
        <textarea
          type="text"
          class="form-control"
          id="description"
          v-model="description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label" for="clientID">Status</label>
        <select
          class="form-select"
          id="status"
          :value="status"
          v-model="status"
        >
          <option value="new">Not Started</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>
