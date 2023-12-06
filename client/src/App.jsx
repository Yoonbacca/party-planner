// <Outlet /> is a placeholder for where child routes will be nested
import { Outlet } from "react-router-dom"; 
// ApolloClient is a constructor function that will help us make requests to the GraphQL server we set up
// ApolloProvider is a special type of React component that we'll use to provide data to all of the other components
// createHttpLink will allow us to connect to the GraphQL server that's running on a different port than our React application
// InMemoryCache will cache data we retrieve from the server
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
// setContext() will retrieve the token from localStorage and set the HTTP request headers of every request to include the token
import { setContext } from "@apollo/client/link/context"; 

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers, 
      authorization: token ? `Bearer ${token}` : "",
    },
  }
});

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  )
}

export default App
