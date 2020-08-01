import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/link-context';
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
    // console.log('token:', token);
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloWrapper;
