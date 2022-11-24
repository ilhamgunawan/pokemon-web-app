import '../styles/globals.css';
import type { AppProps } from 'next/app';
import config from '../config.json';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: config.endpoint,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemon: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          pokemon_v2_pokemon_aggregate: {
            keyArgs: false,
            merge(existing, incoming) {
              return {
                ...existing,
                ...incoming,
              };
            },
          }
        }
      }
    }
  }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
