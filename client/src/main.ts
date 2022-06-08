import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import router from './router';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrashCan,
  faUser,
  faEnvelope,
  faPhone,
  faIdBadge,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTrashCan, faUser, faEnvelope, faPhone, faIdBadge, faList);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(_, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql',
  cache,
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
