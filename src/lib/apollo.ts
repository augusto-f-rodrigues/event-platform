import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o44wzh0hmt01z2chpb2cu3/master',
  cache: new InMemoryCache()
})