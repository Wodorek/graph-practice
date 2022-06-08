import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import router from './router';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTrashCan);

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
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
