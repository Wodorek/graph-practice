<script setup lang="ts">
import { GET_PROJECTS } from '@/queries/projectQueries';
import { DELETE_PROJECT } from '@/mutations/projectMutations';
import { useMutation } from '@vue/apollo-composable';
import { useRouter } from 'vue-router';

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

const { mutate: deleteProject, onDone } = useMutation(DELETE_PROJECT, {
  refetchQueries: [
    {
      query: GET_PROJECTS,
    },
  ],
});

const router = useRouter();

function deleteProjectHandler() {
  deleteProject({
    id: props.projectId,
  });

  onDone(() => {
    router.push('/');
  });
}
</script>

<template>
  <div class="d-flex mt-5 ms-auto">
    <button @click="() => deleteProjectHandler()" class="btn btn-danger m-2">
      <font-awesome-icon :icon="'trash-can'"></font-awesome-icon>
      Delete Project
    </button>
  </div>
</template>
