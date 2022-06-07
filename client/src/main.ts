import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import router from './router';

const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql',
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, client);
  },

  render: () => h(App),
});

app.use(router);

app.mount('#app');
