<script setup lang="ts">
import { ref } from 'vue';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { useMutation } from '@vue/apollo-composable';
import { GET_CLIENTS } from '@/queries/clientQueries';

const name = ref('');
const email = ref('');
const phone = ref('');

const addClient = useMutation(ADD_CLIENT).mutate;

function submitHandler(e: Event) {
  e.preventDefault();

  if (name.value === '' || email.value === '' || phone.value === '') {
    alert('Please fill in all fields');
    return;
  }

  addClient(
    { name: name.value, email: email.value, phone: phone.value },
    {
      update(cache, { data: { addClient } }) {
        const { clients } = cache.readQuery({
          query: GET_CLIENTS,
        }) as any;

        cache.writeQuery({
          query: GET_CLIENTS,
          data: {
            clients: [...clients, addClient],
          },
        });
      },
    }
  );
  name.value = '';
  email.value = '';
  phone.value = '';
}
</script>

<template>
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-toggle="modal"
    data-bs-target="#addClientModal"
  >
    <div class="d-flex align-items-center">
      <font-awesome-icon :icon="['fa', 'user']"></font-awesome-icon>
      <div class="ms-2">Add Client</div>
    </div>
  </button>

  <div
    class="modal fade"
    id="addClientModal"
    tabindex="-1"
    aria-labelledby="addClientModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addClientModalLabel">Add Client</h5>
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
              <label class="form-label" for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="phone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="phone"
              />
            </div>
            <button
              type="submit"
              data-bs-dismiss="modal"
              class="btn btn-secondary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
