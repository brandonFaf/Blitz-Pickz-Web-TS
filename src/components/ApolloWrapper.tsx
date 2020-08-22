import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  Observable
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/link-context';
import firebase from 'firebase/app';
import 'firebase/auth';
type props = {
  children: React.ReactNode;
};
const ApolloWrapper = ({ children }: props) => {
  const uri =
    process.env.NODE_ENV === 'production'
      ? 'https://blitz-pickz-prod.herokuapp.com/v1/graphql'
      : 'https://blitz-pickz-dev.herokuapp.com/v1/graphql';
  const httpLink = createHttpLink({
    uri
  });
  console.log('uri:', uri);

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });
  const resetToken = onError(
    ({ graphQLErrors, networkError, forward, operation }) => {
      if (graphQLErrors) {
        if (graphQLErrors[0].message.includes('JWT')) {
          // Let's refresh token through async request
          return new Observable(observer => {
            //@ts-ignore
            firebase
              .auth()
              .currentUser.getIdToken(true)
              .then(function (idToken) {
                if (!idToken) {
                  window.localStorage.removeItem('token');
                  return console.log('Refresh token has expired');
                }

                window.localStorage.setItem('token', idToken);

                // reset the headers
                operation.setContext(({ headers = {} }) => ({
                  headers: {
                    // Re-add old headers
                    ...headers,
                    // Switch out old access token for new one
                    authorization: `Bearer ${idToken}`
                  }
                }));
                const subscriber = {
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer)
                };

                // Retry last failed request
                forward(operation).subscribe(subscriber);
              })
              .catch(error => {
                // No refresh or client token available, we force user to login
                observer.error(error);
              });
          });
        }
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }
  );
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(resetToken).concat(httpLink)
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloWrapper;
