<script setup lang="ts">
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import { GET_CLIENTS } from '@/queries/clientQueries';
import { ADD_PROJECT } from '@/mutations/projectMutations';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { GET_PROJECT, GET_PROJECTS } from '@/queries/projectQueries';

const name = ref('');
const description = ref('');
const clientId = ref('');
const status = ref('new');

//clients for select
const { result } = useQuery(GET_CLIENTS);

const addProject = useMutation(ADD_PROJECT, {
  update(cache, { data: { addProject } }) {
    const { projects } = cache.readQuery({ query: GET_PROJECTS }) as any;
    cache.writeQuery({
      query: GET_PROJECTS,
      data: { projects: [...projects, addProject] },
    });
  },
}).mutate;

const clients = computed(() => {
  return result?.value?.clients ?? [];
});

function submitHandler(e: Event) {
  e.preventDefault();

  if (name.value === '' || description.value === '' || status.value === '') {
    alert('Please fill in all fields');
    return;
  }

  console.log(name.value, description.value, status.value, clientId.value);

  addProject({
    name: name.value,
    description: description.value,
    status: status.value,
    clientId: clientId.value,
  });

  name.value = '';
  description.value = '';
  status.value = 'new';
  clientId.value = '';
}
</script>

<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addProjectModal"
    >
      <div class="d-flex align-items-center">
        <font-awesome-icon :icon="['fa', 'list']"></font-awesome-icon>
        <div class="ms-2">New Project</div>
      </div>
    </button>

    <div
      class="modal fade"
      id="addProjectModal"
      tabindex="-1"
      aria-labelledby="addProjectModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProjectModalLabel">Add Project</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit="(e) => submitHandler(e)">
              <div class="mb-3">
                <label class="form-label" for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                />
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
              <div class="mb-3">
                <label class="form-label">Client</label>
                <select
                  id="clientId"
                  class="form-select"
                  :value="clientId"
                  v-model="clientId"
                >
                  <option
                    v-for="client in clients"
                    :key="client.id"
                    :value="client.id"
                  >
                    {{ client.name }}
                  </option>
                </select>
              </div>
              <button
                type="submit"
                data-bs-dismiss="modal"
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
