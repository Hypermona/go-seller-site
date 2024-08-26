import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://more-tiger-28.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "H4m0wVKxc5YSARph87jNqr28IrJ9lOIDQsYIM30BEfmropJIwxh7vFFHxIE6ia38",
  },
});

export default client;
