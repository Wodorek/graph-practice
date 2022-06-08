<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const phone = ref('');

function submitHandler(e: Event) {
  e.preventDefault();
  console.log(name.value, email.value, phone.value);
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
